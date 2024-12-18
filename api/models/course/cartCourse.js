import mongoose from "mongoose";
import ProductCourse from "./productCourse.js";
import User from "../user.js";

const Schema = mongoose.Schema;

const cartCourseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: [{ type: Schema.Types.ObjectId, ref: "ProductCourse" }],
});

const CartCourse = mongoose.model("CartCourse", cartCourseSchema);
export default CartCourse;
