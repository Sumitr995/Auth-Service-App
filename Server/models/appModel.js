import mongoose from "mongoose";

const appSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    apiKey: {
      type: String,
      required: true,
      unique: true,
    },
    ownerName: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const appModel = mongoose.models.app || mongoose.model("app", appSchema);

export default appModel;