import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";
import Order from "../models/order.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

//new order
router.post("/orders", authenticate, async (req, res) => {
  try {
    const {
      products,
      totalAmount,
      //  shippingAddress, shippingMethodId
    } = req.body;
    const { userId } = req.user;

    if (!products) {
      return res.status(400).json({ message: "Products cannot be empty" });
    }

    // if (!totalAmount || !shippingAddress) {
    //   return res
    //     .status(400)
    //     .json({ message: "Total amount and shipping address are required" });
    // }

    const order = new Order({
      user: userId,
      products,
      totalAmount,
      // shippingAddress,
      // shippingMethodId,
      // shippingAddress: req.body.shippingAddress || "Default Address",
      // shippingMethodId: req.body.shippingMethodId || null,
    });

    console.log("Order data received:", {
      userId,
      products,
      totalAmount,
      // shippingAddress,
      // shippingMethodId,
    });

    const saveOrder = await order.save();
    res.status(201).json(saveOrder);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
});

//get data order user
router.get("/orders", authenticate, async (req, res) => {
  try {
    const { userId } = req.user;

    const orders = await Order.find({ user: userId }).populate(
      "products.productId"
    );
    // .populate("shippingMethodId");

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve orders", error: error.message });
  }
});

//update status order
router.patch("/orders/:orderId", authenticate, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Validasi status baru
    const validStatuses = [
      "Pending",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    // Update status order
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/orders/:orderId", authenticate, async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
