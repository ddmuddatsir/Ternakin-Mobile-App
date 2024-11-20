import express from "express";
import Cart from "../models/cartlist.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post("/carts", authenticate, async (req, res) => {
  try {
    const { items } = req.body;
    const { userId } = req.user;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items });
    } else {
      items.forEach((item) => {
        const existingItem = cart.items.find(
          (cartItem) => cartItem.productId.toString() === item.ProductId
        );
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          cart.items.push(item);
        }
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /carts/:userId - Ambil cart berdasarkan userId
router.get("/carts/:userId", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;
    const cart = await Cart.findOne({ userId }).populate("items.ProductId");
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/carts/:userId/:productId", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Filter item yang tidak sesuai dengan productId yang diberikan
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/carts/:userId", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Hapus semua item dari cart
    cart.items = [];

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/carts/:userId/:productId", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;
    const { productId } = req.params;
    const { quantity } = req.body;

    if (quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than 0" });
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (!existingItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Update quantity
    existingItem.quantity = quantity;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
