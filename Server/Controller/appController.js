import { createAppService } from "../services/appService.js";

export const createApp = async (req, res) => {
  try {
    const { name, ownerName } = req.body;

    const app = await createAppService({ name, ownerName });

    return res.status(201).json({
      success: true,
      message: "App created successfully",
      app,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};