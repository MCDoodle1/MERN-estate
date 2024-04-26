import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// API route
app.use("/api/user", userRouter);
