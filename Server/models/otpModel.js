import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  appId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "App",
    required: true,
  },

  otp: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["verify", "reset"],
    required: true,
  },

  expiresAt: {
    type: Number,
    required: true,
  },
});

const OTP = mongoose.models.OTP || mongoose.model("OTP", otpSchema);

export default OTP;