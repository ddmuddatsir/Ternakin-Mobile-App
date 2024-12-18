import mongoose from "mongoose";
import Product from "./product.js";
import User from "./user.js";

const Schema = mongoose.Schema;

const cartlistSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Prodcut",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1, default: 1 },
        addedAt: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

cartlistSchema.virtual("total").get(function () {
  return this.items.reduce(
    (sum, item) => sum + item.quantity * item.productId.price,
    0
  );
});

const Cart = mongoose.model("Cart", cartlistSchema);
export default Cart;
