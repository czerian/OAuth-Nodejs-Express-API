import mongoose from "mongoose"
import { customAlphabet } from "nanoid"

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10)

export interface ProductInput {
  name: string
  image: string
  price: number
  category: string
  discountRate: number
  minQuantity: number
}

export interface ProductDocument extends ProductInput, mongoose.Document {
  createdAt: Date
  updatedAt: Date
}

const productSchema = new mongoose.Schema(
  { 
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    minQuantity: { type: Number, required: true },
    discountRate: { type: Number, required: true },
    productCode: { type: String, required: true, unique: true, default: () => `PID-${nanoid().toUpperCase()}`}
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema)

export default ProductModel
