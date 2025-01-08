import mongoose from "mongoose";

import User from "./user.js";

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: {
    type: Number,
    default: 0,
    validate: {
      validator: function (value) {
        // Memastikan balance bukan Infinity atau NaN
        return isFinite(value);
      },
      message: "Balance must be a finite number",
    },
  },
  transactions: [
    {
      type: {
        type: String,
        enum: ["topup", "payment", "refund"],
        required: true,
      },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      description: { type: String },
      status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "completed",
      },
    },
  ],
});

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
