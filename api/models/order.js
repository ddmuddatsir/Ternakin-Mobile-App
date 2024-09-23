import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Import models
import User from "./user.js";
import Product from "./product.js";
import ShippingMethod from "./shippingMethod.js";

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true }, // Menambahkan required
      price: { type: Number, required: true }, // Menambahkan required
    },
  ],
  totalAmount: { type: Number, required: true }, // Menambahkan required
  orderDate: { type: Date, default: Date.now },
  shippingAddress: { type: String, required: true }, // Menambahkan required
  shippingMethodId: { type: Schema.Types.ObjectId, ref: "ShippingMethod" },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
