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

app.use(express.json());
app.use(cookieParser());

// Update this with your actual frontend URL after deploying the client
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "https://auth.sumitr995.me", "http://localhost:5173"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Pure API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/app", appRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const startServer = async () => {
  try {
    await ConnectDB();
    if (process.env.NODE_ENV !== 'production') {
      app.listen(Port, () => console.log(`Server listening to port : ${Port}`));
    }
  } catch (error) {
    console.log("Server startup failed:", error.message);
  }
};

startServer();

export default app;
