import crypto from "crypto";

const generateApiKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

export default generateApiKey;