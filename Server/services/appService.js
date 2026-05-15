import appModel from "../models/appModel.js";
import generateApiKey from "../utils/generateApiKey.js";

export const createAppService = async ({ name, ownerName }) => {
  if (!name) {
    throw new Error("App name is required");
  }

  const apiKey = generateApiKey();

  const newApp = await appModel.create({
    name,
    ownerName: ownerName || "",
    apiKey,
  });

  return {
    appId: newApp._id,
    name: newApp.name,
    ownerName: newApp.ownerName,
    apiKey: newApp.apiKey,
    createdAt: newApp.createdAt,
  };
};