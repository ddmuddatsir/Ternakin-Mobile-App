import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";
import Order from "../models/order.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

//new order
router.post("/", authenticate, async (req, res) => {
  const { products, totalAmount, shippingAddress, shippingMethodId } = req.body;
  const userId = req.user.id;

  try {
    const order = new Order({
      user: userId,
      products,
      totalAmount,
      shippingAddress,
      shippingMethodId,
    });

    await order.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
});

//get data order user
router.get("/", authenticate, async (req, res) => {
  const userId = req.user.id;

  try {
    const orders = await Order.find({ user: userId }).populate(
      "products.productId"
    );
    res.status(200).json({ orders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve orders", error: error.message });
  }
});

//update status order
router.put("/:orderId", authenticate, async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update order status", error: error.message });
  }
});

export default router;

// // Middleware untuk autentikasi
// const authenticateToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: "Invalid token" });
//     }
//     req.user = user; // menyimpan informasi pengguna ke req.user
//     next(); // melanjutkan ke rute berikutnya
//   });
// };

// //order endpoint
// router.post("/orders", authenticateToken, async (req, res) => {
//   const { productId, quantity, shippingAddress, shippingMethodId } = req.body;

//   try {
//     if (!productId || quantity <= 0 || !shippingAddress) {
//       return res.status(400).json({ error: "Invalid input" });
//     }

//     const userId = req.user.userId;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const product = await Product.findById(productId);
//     if (!product || product.stock < quantity) {
//       return res.status(400).json({ error: "Product not found" });
//     }

//     const totalAmount = product.price * quantity;
//     const newOrder = new Order({
//       user: userId,
//       products: [{ productId, quantity, price: product.price }],
//       totalAmount,
//       orderDate: new Date(),
//       shippingAddress,
//       shippingMethodId,
//       status: "Pending",
//     });

//     await newOrder.save();

//     product.stock -= quantity;
//     await product.save();

//     res.status(201).json(newOrder);
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status().json({ error: "Error creating order" });
//   }
// });

// //get otder by user id
// // router.get("/orders/:userId", authenticateToken, async (req, res) => {
// router.get("/orders", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     const orders = await Order.find({ user: userId })
//       .populate("products.productId")
//       .populate("shippingMethodId");

//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error fetching order", error);
//     res.status(500).json({ error: "Error fetching orders" });
//   }
// });
