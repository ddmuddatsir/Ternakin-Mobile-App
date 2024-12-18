import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderCourseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "ProductCourse",
        required: true,
      },
    },
  ],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
});

const OrderCourse = mongoose.model("OrderCourse", orderCourseSchema);

export default OrderCourse;
