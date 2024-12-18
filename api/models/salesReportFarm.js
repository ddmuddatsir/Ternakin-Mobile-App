//Perbaiki: Schema salah untuk data penjualan pertahun
//Perbaiki: Data pada database salah

import mongoose from "mongoose";
import Farm from "./farm.js";

const Schema = mongoose.Schema;

const salesReportFarmSchema = new Schema(
  {
    farmId: { type: Schema.Types.ObjectId, ref: "Farm", required: true },
    year: { type: Number, required: true },
    totalSales: {
      Januari: { type: Number, default: 0 },
      Februari: { type: Number, default: 0 },
      Maret: { type: Number, default: 0 },
      April: { type: Number, default: 0 },
      Mei: { type: Number, default: 0 },
      Juni: { type: Number, default: 0 },
      Juli: { type: Number, default: 0 },
      Agustus: { type: Number, default: 0 },
      September: { type: Number, default: 0 },
      Oktober: { type: Number, default: 0 },
      November: { type: Number, default: 0 },
      Desember: { type: Number, default: 0 },
    },
  },
  { collection: "salesreportfarm" }
);

const SalesReportFarm = mongoose.model(
  "SalesReportFarm",
  salesReportFarmSchema
);

export default SalesReportFarm;
