import express from "express";
import Wallet from "../models/wallet.js";

const router = express.Router();

// Middleware untuk verifikasi token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).json({ message: "Token tidak disediakan" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token tidak valid" });
    req.user = decoded;
    next();
  });
};

router.get("/wallet/:userId", verifyToken, async (req, res) => {
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
