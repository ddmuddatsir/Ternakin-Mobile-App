import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

// Middleware function to verify token
export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Get token from 'Bearer token' format

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: verified.userId }; // Attach user info to request object

    // Check if user exists
    const user = await User.findById(verified.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Invalid token:", error);
    res.status(400).json({ message: "Invalid token." });
  }
};
