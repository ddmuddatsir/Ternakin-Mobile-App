import express from "express";
import Wallet from "../models/wallet.js";
import User from "../models/user.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

//Create new wallet
router.post("/wallet", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;

    // Cek apakah wallet sudah ada untuk user
    let wallet = await Wallet.findOne({ userId });

    // Jika wallet belum ada, buat wallet baru
    if (!wallet) {
      wallet = new Wallet({ userId, balance: 0 });
      await wallet.save();
      return res.status(201).json(wallet); // Mengirimkan wallet baru
    }

    // Jika wallet sudah ada, kembalikan wallet yang ada
    res.status(200).json(wallet);
  } catch (error) {
    console.error("Error processing wallet:", error);
    res.status(500).json({ error: error.message });
  }
});

//Get wallet data
router.get("/wallet", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;
    const wallet = await Wallet.findOne({ userId }).populate("userId");

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res.status(200).json(wallet);
  } catch (error) {
    console.error("Error fetching wallet:", error);
    res.status(500).json({ message: "Failed to fetching wallet" });
  }
});

// Top up
router.post("/wallet/top-up", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { amount } = req.body;

  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid top-up amount" });
  }

  try {
    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Memastikan saldo tidak menjadi Infinity setelah penambahan
    const newBalance = wallet.balance + amount;
    if (!isFinite(newBalance)) {
      return res.status(400).json({ message: "Invalid balance update" });
    }

    wallet.balance = newBalance;
    wallet.transactions.push({
      type: "topup",
      amount,
      description: "Top-up balance",
      status: "completed",
    });

    await wallet.save();
    res.status(200).json(wallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Payment feature
router.post("/wallet/pay", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { amount, description } = req.body;
  try {
    // Validasi input
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    // Ambil wallet pengguna
    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Cek apakah saldo cukup untuk pembayaran
    if (wallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Kurangi saldo wallet
    wallet.balance -= amount;

    // Tambahkan transaksi pembayaran ke dalam wallet
    wallet.transactions.push({
      type: "payment",
      amount,
      description: description || "Payment transaction",
      status: "completed",
    });

    // Simpan perubahan
    await wallet.save();

    // Kirimkan respons sekali saja
    return res.status(200).json({
      message: "Payment successful",
      wallet, // Mengembalikan wallet setelah transaksi
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Scan QR
router.post("/wallet/scan-qr", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { qrData } = req.body;

  try {
    // Simulasi decoding QR data (misalnya mendapatkan nominal transfer)
    const decodedData = JSON.parse(qrData); // Format QR data misalnya { amount: 50000 }
    const amount = decodedData.amount;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid QR data" });
    }

    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    wallet.transactions.push({
      type: "topup",
      amount,
      description: "QR code top-up",
    });
    wallet.balance += amount;

    await wallet.save();
    res.status(200).json(wallet);
  } catch (error) {
    console.error("Error processing QR data:", error);
    res.status(500).json({ error: error.message });
  }
});

//Transfer
router.post("/wallet/transfer", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { recipientId, amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: "Invalid transfer amount" });
  }

  try {
    const senderWallet = await Wallet.findOne({ userId });
    const recipientWallet = await Wallet.findOne({ userId: recipientId });

    if (!senderWallet || !recipientWallet) {
      return res
        .status(404)
        .json({ message: "Sender or recipient wallet not found" });
    }

    if (senderWallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Deduct from sender
    senderWallet.transactions.push({
      type: "payment",
      amount,
      description: `Transfer to user ${recipientId}`,
    });
    senderWallet.balance -= amount;

    // Add to recipient
    recipientWallet.transactions.push({
      type: "refund",
      amount,
      description: `Received transfer from user ${userId}`,
    });
    recipientWallet.balance += amount;

    await senderWallet.save();
    await recipientWallet.save();

    res.status(200).json({ senderWallet, recipientWallet });
  } catch (error) {
    console.error("Error during transfer:", error);
    res.status(500).json({ error: error.message });
  }
});

//Transfer bank
router.post("/wallet/bank-transfer", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { bankAccount, amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: "Invalid transfer amount" });
  }

  try {
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Deduct balance for bank transfer
    wallet.transactions.push({
      type: "payment",
      amount,
      description: `Bank transfer to account ${bankAccount}`,
    });
    wallet.balance -= amount;

    await wallet.save();
    res.status(200).json(wallet);
  } catch (error) {
    console.error("Error during bank transfer:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
