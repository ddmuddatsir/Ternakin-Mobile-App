import mongoose from "mongoose";

const Schema = mongoose.Schema;

const farmSchema = new Schema(
  {
    name: String,
    location: String,
    rating: Number,
    followers: String,
    workingHours: String,
    image: String,
    productsId: [{ type: Schema.Types.ObjectId, ref: "Product" }], // Referensi ke model Product
  },
  { collection: "farm" }
);

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;
