import mongoose from "mongoose";
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
  },
  { collection: "farm" }
);

// Menambahkan virtual untuk produk yang terkait dengan farm
farmSchema.virtual("productId", {
  ref: "Product",
  localField: "_id",
  foreignField: "farmId",
});

// farmSchema.virtual("productFundId", {
//   ref: "ProductFund",
//   localField: "_id",
//   foreignField: "farmId",
// });

// Menggunakan .toObject atau .toJSON untuk memastikan virtuals ikut disertakan dalam response API
farmSchema.set("toObject", { virtuals: true });
farmSchema.set("toJSON", { virtuals: true });

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;
