import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    appId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "App",
      required: true,
      index: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, // 🔥 adds createdAt & updatedAt
  }
);

// 🔥 COMPOUND UNIQUE INDEX (VERY IMPORTANT)
userSchema.index({ email: 1, appId: 1 }, { unique: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;