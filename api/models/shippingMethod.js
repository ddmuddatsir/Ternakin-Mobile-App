import mongoose from "mongoose";

const Schema = mongoose.Schema;

const shippingMethodSchema = new Schema(
  {
    location: String,
    estimate: [
      {
        timeArrive: Number,
        periodArrive: String,
      },
    ],
    cost: Number,
    method: String,
  },
  { collection: "shippingMethod" }
);

const ShippingMethod = mongoose.model("ShippingMethod", shippingMethodSchema);

export default ShippingMethod;
