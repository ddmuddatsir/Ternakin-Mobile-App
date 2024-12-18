import express from "express";
import Product from "../models/product.js";
import SalesReportFarm from "../models/salesReportFarm.js";
import { authenticate } from "../middleware/authenticate.js";
import Farm from "../models/farm.js";

const router = express.Router();

router.get("/farm", authenticate, async (req, res) => {
  try {
    const farm = await Farm.find()
      .populate("productId")
      .populate("productFundId")
      .populate("salesReportFarmId");

    if (!farm) {
      return res.status(404).json({ message: "Farm not found" });
    }

    res.status(200).json(farm);
  } catch (error) {
    console.error("Error fetching farm data", error);
    res.status(500).json({ message: "There is an error" });
  }
});

router.get("/farm/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    const farm = await Farm.findById(id)
      .populate("productId")
      .populate("productFundId")
      .populate("salesReportFarmId");

    if (!farm) {
      return res.status(404).json({ message: "Farm not found" });
    }

    res.status(200).json(farm);
  } catch (error) {
    console.error("Error fetching farm data", error);
    res.status(500).json({ message: "There is an error" });
  }
});

export default router;
