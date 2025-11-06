import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../backend/config/db.js";
import productRoutes from "../backend/routes/productRoutes.js";
import userRoutes from "../backend/routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/admin", userRoutes);

app.get("/", (req, res) => {
  res.send("🧢 TSHIRT STORE API is running on Vercel!");
});

// ❌ No app.listen()
// ✅ Export app for Vercel
export default app;
