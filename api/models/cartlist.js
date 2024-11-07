import mongoose from "mongoose";
import Product from "./product.js";
import User from "./user.js";

const cartlistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        ProductId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Prodcut",
          required: true,
        },
        quantity: { type: Number, required: true, default: 1 },
        addedAt: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartlistSchema);
export default Cart;
