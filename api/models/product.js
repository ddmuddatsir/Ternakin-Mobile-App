import mongoose from "mongoose";

import ShippingMethod from "./shippingMethod.js";
import Farm from "./farm.js";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    discPer: { type: Number, required: true },
    rate: { type: Number, required: true },
    sold: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    condition: { type: String, required: true },
    minOrder: { type: Number, required: true },
    shedPen: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "cow",
        "chicken",
        "goat",
        "sheep",
        "fish",
        "pork",
        "duck",
        "other",
      ],
    },
    advantages: [String],
    shippingMethodId: { type: Schema.Types.ObjectId, ref: "ShippingMethod" },
    farmId: { type: Schema.Types.ObjectId, ref: "Farm" },
  },
  { collection: "product" }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
