import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import OTP from "../models/otpModel.js";
import RefreshToken from "../models/tokenModel.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import { sendEmail } from "../utils/email.js";

// Function to register a user
export const registerUser = async ({ name, email, password, appId }) => {

  // 1. Validation
  if (!name || !email || !password) {
    throw { status: 400, message: "Missing required fields" };
  }

  // 2. Check existing user
  const existingUser = await User.findOne({ email, appId });
  if (existingUser) {
    throw { status: 409, message: "User already exists" };
  }

  // 3. Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // 4. Create user
  const user = await User.create({
    name,
    email,
    passwordHash,
    appId,
  });

  // 5. Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await OTP.create({
    email,
    appId,
    otp,
    type: "verify",
    expiresAt: Date.now() + 5 * 60 * 1000,
  });

  // 6. Send email (non-blocking)
  sendEmail({
    to: email,
    subject: "Verify your account",
    text: `Your OTP is ${otp}`,
  });

  // 7. Generate tokens
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // 8. Store refresh token
  await RefreshToken.create({
    userId: user._id,
    token: refreshToken,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });

  // 9. Return response
  return {
    user: {
      id: user._id,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
};