import express from "express";
import ProductCourse from "../../models/course/productCourse.js";
import User from "../../models/user.js";
import OrderCourse from "../../models/course/orderCourse.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = express.Router();

router.post("/order-courses", authenticate, async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const { userId } = req.user;

    if (!products) {
      return res
        .status(400)
        .json({ message: "Product Courses cannot be empty" });
    }

    const orderCourse = new OrderCourse({
      user: userId,
      products,
      totalAmount,
    });

    const saveOrderCourse = await orderCourse.save();
    res.status(201).json(saveOrderCourse);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
});

router.get("/order-courses", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;

    const orderCourses = await OrderCourse.find({ user: userId }).populate(
      "products.productId"
    );

    if (!orderCourses.length) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orderCourses });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve order courses",
      error: error.message,
    });
  }
});

router.patch(
  "/order-courses/:orderCourseId",
  authenticate,
  async (req, res) => {
    try {
      const { orderCourseId } = req.params;
      const { status } = req.body;

      const validStatuses = ["Payment", "Success"];

      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      const updatedOrderCourse = await OrderCourse.findByIdAndUpdate(
        orderCourseId,
        { status },
        { new: true }
      );

      if (!updatedOrderCourse) {
        return res.status(404).json({ message: "Order Course not found" });
      }

      return res.status(200).json(updatedOrderCourse);
    } catch (error) {
      console.error("Error updating order:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.delete(
  "/order-courses/:orderCourseId",
  authenticate,
  async (req, res) => {
    try {
      const { orderCourseId } = req.params;

      const deletedOrderCourse = await OrderCourse.findByIdAndDelete(
        orderCourseId
      );

      if (!deletedOrderCourse) {
        return res.status(404).json({ message: "Order not found" });
      }

      return res.status(200).json({ message: "Order successfully deleted" });
    } catch (error) {
      console.error("Error deleting order:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
