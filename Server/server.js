import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import ConnectDB from "./config/DB.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import appRoutes from "./routes/appRoutes.js";

const app = express();
const Port = process.env.PORT || 3000;

console.log("Starting server in", process.env.NODE_ENV, "mode");
console.log("Frontend URL:", process.env.FRONTEND_URL);

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://auth.sumitr995.me",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/app", appRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const startServer = async () => {
  try {
    await ConnectDB();

    if (process.env.NODE_ENV !== "production") {
      app.listen(Port, () => {
        console.log(`Server listening on port ${Port}`);
      });
    }
  } catch (error) {
    console.error("Server startup failed:", error.message);
  }
};

startServer();

export default app;