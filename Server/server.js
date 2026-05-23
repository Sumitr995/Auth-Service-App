import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import ConnectDB from "./config/DB.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import appRoutes from "./routes/appRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/app", appRoutes);

// Fallback to index.html for any other routes (SPA support)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const startServer = async () => {
  try {
    await ConnectDB();
    app.listen(Port, () => console.log(`Server listening to port : ${Port}`));
  } catch (error) {
    console.log("Server startup failed:", error.message);
  }
};

startServer();