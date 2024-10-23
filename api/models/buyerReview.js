import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Product = require("./product.js");

const buyerReviewSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  name: String,
  rating: Number,
  reviewText: String,
  reviewDate: Date,
  image: String,
  photoReview: [String],
});

const BuyerReview = mongoose.model("BuyerReview", buyerReviewSchema);

export default BuyerReview;
