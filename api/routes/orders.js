import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";
import Order from "../models/order.js";

const router = express.Router();

//order endpoint
router.post("/orders", async (req, res) => {
  const { userId, productId, quantity, shippingAddress, shippingMethodId } =
    req.body;

  try {
    if (!userId || !productId || quantity <= 0 || !shippingAddress) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const product = await Product.findById(productId);
    if (!product || product.stock <= quantity) {
      return res.status(400).json({ error: "Product not found" });
    }

    const totalAmount = product.price * quantity;
    const newOrder = new Order({
      user: userId,
      products: [{ productId, quantity, price: product.price }],
      totalAmount,
      orderDate: new Date(),
      shippingAddress,
      shippingMethodId,
      status: "Pending",
    });

    await newOrder.save();

    product.stock -= quantity;
    await product.save();

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status().json({ error: "Error creating order" });
  }
});

//get otder by user id
router.post("/orders/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ user: userId })
      .populate("products.productId")
      .populate("shippingMethodId");

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching order", error);
    res.status(500).json({ error: "Error fetching orders" });
  }
});

export default router;
