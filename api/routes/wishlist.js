import express from "express";
import Wishlist from "../models/wishlist.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post("/wishlist/add", authenticate, async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.userId;

  console.log("Received productId:", productId); // Log untuk memeriksa productId
  console.log("Received userId:", userId); // Log untuk memeriksa userId

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let wishlist = await Wishlist.findOne({ user: userId });
    console.log("Wishlist found:", wishlist);

    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, products: [productId] });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      } else {
        return res.status(400).json({ message: "Product already in wishlist" });
      }
    }

    await wishlist.save();
    res.status(200).json({ message: "Product added to wishlist", wishlist });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding product to wishlist", error });
  }
});

router.get("/wishlist", authenticate, async (req, res) => {
  const userId = req.user.userId;

  try {
    const wishlist = await Wishlist.findOne({ user: userId }).populate(
      "products"
    );

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving wishlist", error });
  }
});

router.delete("/wishlist/remove", authenticate, async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.userId;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const index = wishlist.products.indexOf(productId);
    if (index > -1) {
      wishlist.products.splice(index, 1);
      await wishlist.save();
      return res.status(200).json({ message: "Product removed from wistlist" });
    } else {
      return res.status(404).json({ message: "Product not found in wistlist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing product from wishlist", error });
  }
});

export default router;
