import express from "express";
import User from "../models/user.js";

const router = express.Router();

//user profile
router.get("/profile/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile");
    res.status(500).json({ message: "Error fetching user profile" });
  }
});

export default router;
