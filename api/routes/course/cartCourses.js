import express from "express";

import CartCourse from "../../models/course/cartCourse.js";
import User from "../../models/user.js";
import ProductCourse from "../../models/course/productCourse.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = express.Router();

// Get Cart By userId
router.get("/cart-courses", authenticate, async (req, res) => {
  const { userId } = req.user;
  try {
    const cart = await CartCourse.findOne({ userId })
      .populate("productId")
      .populate("userId");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Add item to cart
router.post("/cart-courses", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  try {
    let cart = await CartCourse.findOne({ userId });

    if (!cart) {
      cart = new CartCourse({ userId, productId: [] });
    }

    const existingItem = cart.productId.find(
      (item) => item.toString() === productId
    );

    if (existingItem) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    cart.productId.push(productId);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Remove item from cart
router.delete("/cart-courses/:productId", authenticate, async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.params;

  try {
    const cart = await CartCourse.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.productId = cart.productId.filter(
      (item) => item.toString() !== productId
    );

    if (cart.productId.length === 0) {
      await cart.save();
      res.status(200).json({ message: "Cart is now empty" });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Clear cart
router.delete("/cart-courses", authenticate, async (req, res) => {
  const { userId } = req.user;
  try {
    const cart = await CartCourse.findOneAndUpdate(
      { userId: userId },
      { productId: [] },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
