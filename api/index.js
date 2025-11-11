import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db.js";
import productRoutes from "../routes/productRoutes.js";
import userRoutes from "../routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Proper CORS setup
app.use(
  cors({
    origin: ["http://localhost:3000"], // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Increase payload size limit (fixes 413 error)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ✅ Routes
app.use("/api/products", productRoutes);
app.use("/api/admin", userRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("🛍️ TeeTrend API is running successfully...");
});

export default app;
