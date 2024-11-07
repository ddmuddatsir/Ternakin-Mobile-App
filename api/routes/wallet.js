import express from "express";
import Wallet from "../models/wallet.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.get("/wallet/:userId", authenticate, async (req, res) => {
  try {
    const { userId } = req.params;
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res
      .status(200)
      .json({ balance: wallet.balance, transaction: wallet.transaction });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    res.status(500).json({ message: "Failed to fetching wallet" });
  }
});

export default router;
