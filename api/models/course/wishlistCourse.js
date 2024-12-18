import mongoose from "mongoose";
import ProductCourse from "./productCourse.js";

const Schema = mongoose.Schema;

const wishlistCourseSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productCourseId: [{ type: Schema.Types.ObjectId, ref: "ProductCourse" }],
  },
  { timestamps: true },
  { collection: "wishlistCourse" }
);

const WishlistCourse = mongoose.model("WishlistCourse", wishlistCourseSchema);

export default WishlistCourse;
