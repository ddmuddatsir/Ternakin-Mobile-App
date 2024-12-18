import express from "express";
import ProductFund from "../../models/funding/productFund.js";
import Farm from "../../models/farm.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = express.Router();

//API Route for get all Products Fund
router.get("/product-funds", authenticate, async (req, res) => {
  try {
    //Get all Product funds data from database
    const productFunds = await ProductFund.find().populate("farmId");

    //If data not found, return response with status 404
    if (!productFunds) {
      return res.status(404).json({ message: "Product not found" });
    }

    //If data found return response data with 200
    res.status(200).json(productFunds);
  } catch (error) {
    //Handle error with error message on server
    console.error("Error fetching data", error);

    //Return response with status 505 if error in server
    res.status(500).json({ message: "Failed to fetch product courses" });
  }
});

//API Route for get Product fund by ID
router.get("/product-funds/:id", authenticate, async (req, res) => {
  // Extract the ID parameter from the route
  const { id } = req.params;
  try {
    //Query the database to find a Product Fund by its ID
    const productFund = await ProductFund.findById(id).populate("farmId");

    if (!productFund) {
      return res.status(404).json({ message: "Product Fund not found" });
    }

    res.status(200).json(productFund);
  } catch (error) {
    //Handle error with error message on server
    console.error("Error fetching data", error);

    //Return response with status 505 if error in server
    res.status(500).json({ message: "Failed to fetch product courses" });
  }
});

export default router;
