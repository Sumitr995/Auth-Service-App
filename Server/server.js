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

// Trust the first proxy (Vercel) to allow secure cookies to be passed correctly
app.set('trust proxy', 1);

// Set default NODE_ENV
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

console.log("Starting server in", process.env.NODE_ENV, "mode");
console.log("Frontend URL:", process.env.FRONTEND_URL);

// Middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "https://auth.sumitr995.me",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean); // Filter out undefined if FRONTEND_URL is not set

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200
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

    // Listen locally, but let Vercel handle production listening
    if (!process.env.VERCEL) {
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