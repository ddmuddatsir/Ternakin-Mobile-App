import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";
import nodemailer from "nodemailer";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "./models/user.js";
import Product from "./models/product.js";
import Farm from "./models/farm.js";
import ShippingMethod from "./models/shippingMethod.js";
import Order from "./models/order.js";
import { connectToDatabase } from "./config/db.js";

import productRoutes from "./routes/products.js";
import addressRoutes from "./routes/address.js";
import ordersRoutes from "./routes/orders.js";
import profileRoutes from "./routes/profile.js";
import walletRoutes from "./routes/wallet.js";
import topupRoutes from "./routes/topup.js";
import paymentRoutes from "./routes/payment.js";
import paymentcreditcardRoutes from "./routes/payment.js";
import wishlistRoutes from "./routes/wishlist.js";
import { BASE_URL } from "./config/apiConfig.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

// Connect to MongoDB
connectToDatabase();

const app = express();
const port = 8000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Create a Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

try {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.verify();
  console.log("Server is ready to send emails");
} catch (error) {
  console.error("Error with email transporter configuration:", error);
}

// Function to send verification email
const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: "dedemudasir@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: ${BASE_URL}/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

// Register a new user
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already registered:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });

    // Generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Save the user to the database
    await newUser.save();

    // Send verification email to the user
    await sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message:
        "Registration successful. Please check your email for verification.",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

// Verify email endpoint
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    // Find the user with the given verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    // Mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ message: "Email Verification Failed" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cek apakah pengguna ada
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    // Cek apakah password benar
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Kirim token dan data pengguna
    res.status(200).json({
      token,
      userId: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Login gagal" });
  }
});

app.post("/refresh-token", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided." });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    // Anda bisa memeriksa apakah pengguna masih ada di database jika perlu

    const user = await User.findById(decoded.userId); // Mengambil user dari database
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Buat token baru
    const newAccessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({ message: "Invalid token." });
  }
});

app.post("/send-email", async (req, res) => {
  const { email, orderDetails } = req.body;

  const mailOptions = {
    from: "dedemudasir@gmail.com",
    to: email,
    subject: "Detail pesanan anda di ternakin",
    // text: `Thanks for orders with ternakin, Your order detail :\n\n${orderDetails}`,
    text: `Thank you for your order!\n\nOrder Details:\n${JSON.stringify(
      orderDetails,
      null,
      2
    )}`,
    html: `<h1>Thank you for your order!</h1><pre>${JSON.stringify(
      orderDetails,
      null,
      2
    )}</pre>`,
  };

  try {
    await transporter.sendMail(mailOptions, (error, info));
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error.message);
    res.status(500).send("Error sending email");
  }
});

app.use(productRoutes);
app.use(addressRoutes);
app.use(ordersRoutes);
app.use(profileRoutes);
app.use(walletRoutes);
app.use(topupRoutes);
app.use(paymentRoutes);
app.use(paymentcreditcardRoutes);
app.use(wishlistRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
