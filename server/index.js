import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";
import contactsRoutes from "./routes/ContactRoutes.js";
import messagesRoutes from "./routes/MessagesRoute.js";
import setupSocket from "./socket.js"; // Socket.io setup function
import channelRoutes from "./routes/ChannelRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8747;
const databaseURL = process.env.DATABASE_URL;

// CORS configuration to allow requests from specific origins
app.use(
  cors({
    origin: process.env.ORIGIN
      ? [process.env.ORIGIN]
      : ["http://localhost:5173"], // Default origin for local testing
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, // Allows cookies to be sent with requests
  })
);

// Serve static files for user profile and other file uploads
app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"));

// Middleware for parsing cookies and JSON payloads
app.use(cookieParser());
app.use(express.json());

// Define API routes for different functionalities
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/channel", channelRoutes);

// Root route to Welcome API message
app.get("/", (req, res) => {
  res.send("Welcome to the Chat App Backend API!");
});

// Create an HTTP server and attach it to the Express app
// This server will be used for both HTTP and WebSocket connections
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Initialize Socket.io with the HTTP server to share the same port
setupSocket(server); // This function sets up and attaches Socket.io to `server`

// Connect to MongoDB
mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Connection Error:", err.message);
  });
