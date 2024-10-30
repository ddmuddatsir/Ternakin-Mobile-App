import express from "express";
import Order from "../models/order.js";
import Payment from "../models/payment.js";

const router = express.Router();

router.post("/payment/credit-card", async (req, res) => {
  try {
    const { userId, orderId, amount } = req.body;

    const order = await Order.findOne(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Here you would integrate with a real payment gateway
    // For now, we'll assume the payment is successful

    const payment = new Payment({
      userId,
      orderId,
      amount,
      status: "completed",
      paymentMethod: "credit_card",
    });
    await payment.save();

    order.status = "paid";
    await order.save();

    res.status(200).json({ message: "Payment successfully" });
  } catch (error) {
    console.error("Error during credit card payment", error);
    res.status(500).json({ message: "Paymenr failed" });
  }
});

export default router;
