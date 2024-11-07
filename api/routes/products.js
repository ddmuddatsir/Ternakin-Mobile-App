import express from "express";
import Product from "../models/product.js";
import Farm from "../models/farm.js";
import ShippingMethod from "../models/shippingMethod.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

//product get all
router.get("/products", authenticate, async (req, res) => {
  try {
    const products = await Product.find()
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
