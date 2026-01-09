import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import rateLimit from "express-rate-limit";

import userRoutes from "./Routes/userRoutes.js";
import studentRoutes from "./Routes/studentRoutes.js";
import contactRoutes from "./Routes/contactRoutes.js";
import courseRoutes from "./Routes/courseRoutes.js";
import workshopRoutes from "./Routes/workshopRoutes.js";
import quizRoutes from "./Routes/quizRoutes.js";

dotenv.config();

// just a comment

const app = express();
app.set("trust proxy", 1);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(hpp());
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use("/api", limiter);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/workshop", workshopRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
