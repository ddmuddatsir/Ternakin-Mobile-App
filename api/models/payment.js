import mongoose from "mongoose";

import User from "./user.js";
import Order from "./order.js";

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    reg: "Order",
    required: true,
  },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "complete", "failed"],
    dafault: "pending",
  },
  paymentMethod: {
    type: String,
    enum: ["wallet", "credit_card"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
