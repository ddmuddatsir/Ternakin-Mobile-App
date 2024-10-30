import express from "express";
import Order from "../models/order.js";
import Payment from "../models/payment.js";
import Wallet from "../models/wallet.js";

const router = express.Router();

router.post("/payment/wallet", async (req, res) => {
  try {
    const { userId, orderId, amount } = req.body;

    const wallet = await Wallet.findOne({ userId });
    if (!wallet || wallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient wallet balance" });
    }

    const order = await Order.findOne(orderId);
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }

    wallet.balance -= amount;
    wallet.transaction.push({ type: "payment", amount });
    await wallet.save();

    const payment = new Payment({
      userId,
      orderId,
      amount,
      status: "payment",
      paymentMethod: "wallet",
    });
    await payment.save();

    order.status = "paid";
    await order.save();

    res.status(200).json({ message: "Payment successfully" });
  } catch (error) {
    console.error("Error during wallet payment:", error);
    res.status(500).json({ message: "payment failed" });
  }
});

export default router;
