import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error("MONGODB_URI is not defined in environment variables");
    process.exit(1);
  }

  try {
    // If you encounter "querySrv ENOTFOUND" or DNS resolution issues with MongoDB Atlas:
    dns.setServers(['8.8.8.8', '8.8.4.4']);

    // Connection options for stability
    const options = {
      autoIndex: true, // Build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6
    };

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected. Attempting to reconnect...");
    });

    await mongoose.connect(mongoURI, options);

  } catch (error) {
    console.error("Critical error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  } catch (err) {
    console.error("Error during MongoDB connection closure:", err);
    process.exit(1);
  }
});

export default connectDB;