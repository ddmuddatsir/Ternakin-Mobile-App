import mongoose from "mongoose";

import Product from "./product.js";
import ProductFund from "./funding/productFund.js";
import SalesReportFarm from "./salesReportFarm.js";
const Schema = mongoose.Schema;

const farmSchema = new Schema(
  {
    name: String,
    location: String,
    rating: Number,
    followers: String,
    workingHours: String,
    image: String,
    salesReportFarmId: { type: Schema.Types.ObjectId, ref: "SalesReportFarm" },
    productFundId: { type: Schema.Types.ObjectId, ref: "ProductFund" },
    productId: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { collection: "farm" }
);

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;
