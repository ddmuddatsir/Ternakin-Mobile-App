import express from "express";
import User from "../models/user.js";

const router = express.Router();

//add address
router.post("/address", async (req, res) => {
  try {
    const { userId, address } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.addresses.push(address);
    await user.save();

    res.status(200).json({ message: "Address created successfully" });
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500);
  }
});

//get address
router.get("/address/:userId", async (req, res) => {
  try {
    const userId = req.param.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const addresses = user.addresses;
    res.status(200).json({ addresses });
  } catch (error) {
    console.error("Error retrieving address:", error);
    res.status(500).json({ message: "Error retrieving addressess" });
  }
});

export default router;
