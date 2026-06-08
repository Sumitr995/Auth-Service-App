import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";
import { registerUser } from "../services/authService.js";

// Functions to control Register, Login, Logout etc

// register

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = await registerUser({
      name,
      email,
      password,
    });

    //Creating JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set cookie after registration to log the user in immediately
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userData: result.user
    });

  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Function

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email & Password Required" });
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Email Address" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    //Creating JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // converted in ms
    });

    return res.status(200).json({ success: true, message: "You Logged In !!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// LogOut Function

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.status(200).json({ success: true, message: "Logged Out" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Verification OTP to User email

export const sendVerifyOtp = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.isAccountVerified) {
      return res
        .status(400)
        .json({ success: false, message: "User is already verified" });
    }

    // random OTP (gives 6 digit number)
    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hrs
    await user.save();

    // sending a mail
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Account Verification OTP",
      text: `Your Account Verification OTP is ${otp}. Confirm your account using this OTP.`,
    };

    await transporter.sendMail(mailOption);

    return res
      .status(200)
      .json({ success: true, message: "Verification OTP is Sent on Email" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Verify Email
export const verifyEmail = async (req, res) => {
  const { otp } = req.body;
  const userId = req.user.id;

  if (!userId || !otp) {
    return res.status(400).json({ success: false, message: "Missing Details" });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User Not Found !" });
    }

    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Otp, Retry again!" });
    }

    if (user.verifyOtpExpireAt < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP got Expired !" });
    }

    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpireAt = 0;

    await user.save();

    // adding email message of verification
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Account Verification Successful",
      text: `Your email has been Successfully Verified. You are now ready to get started!`,
    };

    await transporter.sendMail(mailOption);

    return res
      .status(200)
      .json({ success: true, message: "Email Verified Successfully !" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Check if user Authenticated

export const isAuthenticated = async (req, res) => {
  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Send Password Reset OTP

export const sendResetotp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide email" });
  }
  try {
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // random 6 digit Number
    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    // sending a mail
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Password Reset Otp",
      text: `Your Reset Password otp is ${otp}. Use these OTP for resetting your password.`,
    };

    await transporter.sendMail(mailOption);

    return res
      .status(200)
      .json({
        success: true,
        message: "Otp send to the User's Email Account.",
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Email, OTP, and newPassword are required",
      });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User Not Found" });
    }

    if (user.resetOtp === "" || user.resetOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (user.resetOtpExpireAt < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpireAt = 0;

    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "User Password reset Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
