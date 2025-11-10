import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getSaleProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/sale", getSaleProducts);
router.get("/:id", getProductById);
router.post("/add", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
