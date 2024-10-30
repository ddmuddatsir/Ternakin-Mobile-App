import express from "express";
import Wallet from "../models/wallet.js";

const router = express.Router();

router.post("/wallet/topup", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    wallet.balance += amount;
    wallet.transaction.push({ type: "topup", amount });
    await wallet.save();
  } catch (error) {
    console.error("Error during wallet top-up", error);
    res.status(500).json({ message: "Wallet top-up failed" });
  }
});

export default router;
