import express from "express";
import User from "../models/user.js";

const router = express.Router();

// Middleware untuk verifikasi token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user; // menyimpan informasi pengguna ke req.user
    next(); // melanjutkan ke rute berikutnya
  });
};

//user profile
router.get("/profile", authenticateToken, async (req, res) => {
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
