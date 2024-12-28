// server.js
import express from "express";
import mongoose from "mongoose";
// import userModel from './models/userModel'; // Ensure this path is correct
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000; // Default to 3000 if PORT is not defined

// Middleware for CORS
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middleware to parse JSON
app.use(express.json());

app.use("/users", userRoute);
// Connect to MongoDB
connectDB();

// Start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});