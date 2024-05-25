import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";

// Use .env variable
dotenv.config();

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Run the server
const app = express();

// Deploy to Render
const __dirname = path.resolve();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Server can read JSON
app.use(express.json());

// Initialize Cookie parser
app.use(cookieParser());

// API routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Static file to deploy to Render
app.use(express.static(path.join(__dirname, "/client/dist"))); // "dist" in Vite, "build" in React-create-app

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
