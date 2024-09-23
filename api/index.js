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
import { BASE_URL } from "./models/apiConfig.js";

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dedemudasir:dedemudasir@productcard.ahdtnni.mongodb.net/register"
    );
    console.log("Connected to MongoDB");

    // Cek koleksi
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log(
      "Collections:",
      collections.map((col) => col.name)
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

connectToDatabase();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dedemudasir@gmail.com",
    pass: "melshgwnzglxffjz",
  },
});

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

app.post("/verify/token", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  // Verifikasi token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.status(200).json({ message: "Token valid", user: decoded });
  });
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};

const secretKey = generateSecretKey();

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
    const token = jwt.sign({ userId: user._id }, "your_static_secret_key");

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

// Product get id
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id)
      .populate("farmId")
      .populate("shippingMethodId");

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Terjadi kesalahan." });
  }
});

// Product get all
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find()
      .populate("farmId")
      .populate("shippingMethodId");
    res.json(products);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Terjadi kesalahan." });
  }
});

// Add address endpoint
app.post("/address", async (req, res) => {
  try {
    const { userId, address } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the new address to the user's addresses array
    user.addresses.push(address);

    // Save the updated user
    await user.save();

    res.status(200).json({ message: "Address created successfully" });
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500).json({ message: "Error adding address" });
  }
});

// Get addresses endpoint
app.get("/addresses/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const addresses = user.addresses;
    res.status(200).json({ addresses });
  } catch (error) {
    console.error("Error retrieving addresses:", error);
    res.status(500).json({ message: "Error retrieving addresses" });
  }
});

// Create order endpoint
app.post("/orders", async (req, res) => {
  const { userId, productId, quantity, shippingAddress, shippingMethodId } =
    req.body;

  try {
    // Validate input
    if (!userId || !productId || quantity <= 0 || !shippingAddress) {
      return res.status(400).json({ error: "Invalid input" });
    }

    // Find the user to ensure they exist
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const price = product.price; // Get the price of the product

    // Check if there's already an order for this user with status 'Pending'
    let order = await Order.findOne({ user: userId, status: "Pending" });

    if (!order) {
      // Create a new order if it doesn't exist
      order = new Order({
        user: userId,
        products: [{ productId, quantity, price }],
        totalAmount: price * quantity,
        shippingAddress,
        shippingMethodId,
        status: "Pending",
      });
    } else {
      // If an order exists, update the products and totalAmount
      const productIndex = order.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex > -1) {
        // Update quantity if product is already in the order
        order.products[productIndex].quantity += quantity;
        order.products[productIndex].price = price;
      } else {
        // Add new product to order
        order.products.push({ productId, quantity, price });
      }

      // Recalculate the total amount
      order.totalAmount = order.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }

    await order.save();
    res.json({ success: true, order });

    res.status(200).json({ message: "Product created successfully!" });
  } catch (error) {
    console.error("Error creating orders:", error);
    res.status(500).json({ message: "Error creating orders" });
  }
});

// Get user orders endpoint
app.get("/orders/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find orders by userId and populate user details
    const orders = await Product.find({ user: userId }).populate("user");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).json({ message: "Error retrieving orders" });
  }
});

// Get user profile endpoint
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the user profile" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
