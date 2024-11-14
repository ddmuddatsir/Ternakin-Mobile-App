import express from "express";
import Product from "../models/product.js";
import Farm from "../models/farm.js";
import ShippingMethod from "../models/shippingMethod.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

//product get all
router.get("/products", authenticate, async (req, res) => {
  try {
    // Ambil query parameter untuk filter
    const {
      category,
      minPrice,
      maxPrice,
      rating,
      farmId,
      shippingMethodId,
      // sortBy,
    } = req.query;

    // Buat objek filter dinamis berdasarkan query yang ada
    const filter = {};

    if (category) {
      filter.shedPen = category;
    }

    if (minPrice) {
      filter.price = { ...filter.price, $gte: Number(minPrice) };
    }

    if (maxPrice) {
      filter.price = { ...filter.price, $lte: Number(maxPrice) };
    }

    if (rating) {
      filter.rating = { $gte: Number(rating) };
    }

    if (farmId) {
      filter.farmId = farmId;
    }

    if (shippingMethodId) {
      filter.shippingMethodId = shippingMethodId;
    }

    // let sort = {};
    // if (sortBy === "priceLowToHigh") {
    //   sort = { price: 1 }; // Ascending (termurah)
    // } else if (sortBy === "priceHighToLow") {
    //   sort = { price: -1 }; // Descending (termahal)
    // }

    const products = await Product.find(filter)
      .populate("farmId")
      .populate("shippingMethodId");
    res.json(products);
  } catch (error) {
    console.log("Error fetching error", error);
    res.status(500).json({ error: "There is an error" });
  }
});

//product get id
router.get("/products/:id", authenticate, async (req, res) => {
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
    console.error("Error fetching product", error);
    res.status(500).json({ error: "There is an error" });
  }
});

export default router;
