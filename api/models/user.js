import mongoose from "mongoose";

import Product from "./product.js";
import Cart from "./cartlist.js";
import Order from "./order.js";
import Wallet from "./wallet.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    addresses: [
      {
        name: String,
        mobileNo: String,
        houseNo: String,
        street: String,
        landmark: String,
        city: String,
        country: { type: String, default: "Indonesia" },
        postalCode: String,
      },
    ],

    Products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    wishlist: { type: mongoose.Schema.Types.ObjectId, ref: "Wishlist" },
    cartlist: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    orders: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    wallet: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
