import mongoose from "mongoose";

import User from "./user.js";
import Product from "./product.js";

const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true },
  { collection: "swishlist" }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
