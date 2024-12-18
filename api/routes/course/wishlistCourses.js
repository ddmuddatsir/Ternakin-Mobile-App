import express from "express";
import WishlistCourse from "../../models/course/wishlistCourse.js";
import User from "../../models/user.js";
import ProductCourse from "../../models/course/productCourse.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = express.Router();

router.post("/wishlist-courses", authenticate, async (req, res) => {
  try {
    const { productCourseId } = req.body;
    const { userId } = req.user;

    let wishlistCourse = await WishlistCourse.findOne({ userId });

    const productExists = await ProductCourse.exists({ _id: productCourseId });
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!wishlistCourse) {
      wishlistCourse = new WishlistCourse({
        userId,
        products: [{ productCourseId }],
      });
    } else {
      if (
        !wishlistCourse.productCourseId ||
        !Array.isArray(wishlistCourse.productCourseId)
      ) {
        wishlistCourse.productCourseId = [];
      }

      if (
        !wishlistCourse.productCourseId.some(
          (id) => id.toString() === productCourseId
        )
      ) {
        wishlistCourse.productCourseId.push(productCourseId);
      }
    }

    await wishlistCourse.save();
    return res.status(200).json(wishlistCourse);
  } catch (error) {
    console.error("Error adding course to wishlist course");
    return res.status(500).json({ message: "Internsl server error" });
  }
});

router.delete("/wishlist-courses", authenticate, async (req, res) => {
  try {
    const { productCourseId } = req.body;
    const { userId } = req.user;

    const wishlistCourse = await WishlistCourse.findOne({ userId });
    const productExists = await ProductCourse.exists({ _id: productCourseId });
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!wishlistCourse) {
      return res.status(404).json({ message: "Wishlist course not found" });
    }

    wishlistCourse.productCourseId = wishlistCourse.productCourseId.filter(
      (id) => id.toString() !== productCourseId
    );

    await wishlistCourse.save();

    return res.status(200).json({
      message: "Product remove from wishlist course",
      products: wishlistCourse.productCourseId,
    });
  } catch (error) {
    console.error("Error removing from wishlist course", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/wishlist-courses", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;

    const wishlistCourse = await WishlistCourse.findOne({ userId });

    if (!wishlistCourse) {
      res.status(404).json({ message: "Wishlist course not found" });
    }

    return res.status(200).json(wishlistCourse.productCourseId);
  } catch (error) {
    console.error("Error removing from wishlist course:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
