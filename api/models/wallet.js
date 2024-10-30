import mongoose from "mongoose";

import User from "./user.js";

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, default: 0 },
  transaction: [
    {
      type: {
        type: String,
        enum: ["topup", "payment", "refund"],
        required: true,
      },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
