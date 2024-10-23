import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: String,
    price: Number,
    discPer: Number,
    rate: Number,
    sold: Number,
    image: String,
    stock: Number,
    condition: String,
    minOrder: Number,
    shedPen: String,
    advantages: [String],
    shippingMethodId: { type: Schema.Types.ObjectId, ref: "ShippingMethod" },
    farmId: { type: Schema.Types.ObjectId, ref: "Farm" },
  },
  { collection: "product" }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
