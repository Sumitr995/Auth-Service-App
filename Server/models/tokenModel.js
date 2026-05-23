import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  token: {
    type: String,
    required: true,
  },

  expiresAt: {
    type: Date,
    required: true,
    expires: 0,
  },
});

const RefreshToken =
  mongoose.models.RefreshToken ||
  mongoose.model("RefreshToken", tokenSchema);

export default RefreshToken;