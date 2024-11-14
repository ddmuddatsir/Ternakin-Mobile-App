import express from "express";
import Wishlist from "../models/wishlist.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import Farm from "../models/farm.js";
import ShippingMethod from "../models/shippingMethod.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post("/wishlist", authenticate, async (req, res) => {
  try {
    const { productId } = req.body; // Mendapatkan ID produk dari body request
    const { userId } = req.user; // Mendapatkan userId dari request yang sudah diautentikasi

    // Mencari wishlist yang sudah ada untuk user ini
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      // Jika wishlist belum ada, buat yang baru
      wishlist = new Wishlist({ userId, products: [{ productId }] });
    } else {
      // Pastikan productId adalah array yang valid
      if (!wishlist.productId || !Array.isArray(wishlist.productId)) {
        wishlist.productId = []; // Inisialisasi jika undefined atau bukan array
      }

      // Jika wishlist sudah ada, tambahkan produk baru jika belum ada
      if (!wishlist.productId.some((id) => id.toString() === productId)) {
        wishlist.productId.push(productId); // Tambahkan productId ke array
      }
    }

    await wishlist.save(); // Simpan wishlist ke database
    return res.status(200).json(wishlist);
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/wishlist", authenticate, async (req, res) => {
  try {
    const { productId } = req.body; // Mendapatkan ID produk dari body request
    const { userId } = req.user; // Mendapatkan userId dari request yang sudah diautentikasi

    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    // Hapus produk dari wishlist
    wishlist.productId = wishlist.productId.filter(
      (item) => item.productId.toString() !== productId
    );
    await wishlist.save();

    return res.status(200).json(wishlist);
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/wishlist", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;
    const wishlist = await Wishlist.findOne({ userId })
      .populate({
        path: "productId",
        populate: [
          {
            path: "shippingMethodId",
            model: "ShippingMethod",
          },
          {
            path: "farmId",
            model: "Farm",
          },
        ],
      })
      .populate("userId");

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    return res.status(200).json(wishlist.productId);
  } catch (error) {
    console.error("Error getting wishlist:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
