import express from "express";
import ProductCourse from "../../models/course/productCourse.js";
import { authenticate } from "../../middleware/authenticate.js";
import { validateObjectId } from "../../middleware/validateObjectId.js";

const router = express.Router();

//API Route for get all Products Course
router.get("/product-courses", authenticate, async (req, res) => {
  try {
    const productCourses = await ProductCourse.find();

    if (!productCourses) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(productCourses);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).json({
      message: "Failed to fetch product courses. Error: ",
    });
  }
});

//API Route for get Product Course by ID
router.get(
  "/product-courses/:id",
  authenticate,
  validateObjectId,
  async (req, res) => {
    const { id } = req.params;
    try {
      const productCourse = await ProductCourse.findById(id);

      if (!productCourse) {
        return res.status(404).json({ error: "Product Course not found" });
      }

      res.status(200).json(productCourse);
    } catch (error) {
      console.error("Error fetching product", error);
      res.status(500).json({
        error: "Failed to fetch product courses. Error: " + error.message,
      });
    }
  }
);

export default router;
