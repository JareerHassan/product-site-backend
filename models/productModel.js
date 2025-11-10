import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: [String], required: true },
  color: { type: [String], default: [] }, 
  images: { type: [String], required: true }, 
  description: { type: String },
  isOnSale: { type: Boolean, default: false },
  salePrice: { type: Number },
  discountPercent: { type: Number },
});

export default mongoose.model("Product", productSchema);
