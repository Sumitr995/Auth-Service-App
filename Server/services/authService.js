import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import OTP from "../models/otpModel.js";
import RefreshToken from "../models/tokenModel.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import { sendEmail } from "../utils/email.js";

// Function to register a user
export const registerUser = async ({ name, email, password }) => {

  // 1. Validation
  if (!name || !email || !password) {
    throw { status: 400, message: "Missing required fields" };
  }

  // 2. Check existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw { status: 409, message: "User already exists" };
  }

  // 3. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // 5. Generate tokens
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // 6. Store refresh token
  await RefreshToken.create({
    userId: user._id,
    token: refreshToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  // 7. Return response
  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
};