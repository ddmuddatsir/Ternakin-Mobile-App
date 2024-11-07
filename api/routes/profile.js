import express from "express";
import User from "../models/user.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

//user profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      userId: user._id,
      name: user.name,
      email: user.email,
      verified: user.verified,
    });
  } catch (error) {
    console.error("Error fetching user profile");
    res.status(500).json({ message: "Error fetching user profile" });
  }
});

export default router;
