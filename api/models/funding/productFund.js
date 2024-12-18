import mongoose from "mongoose";
import Farm from "../farm.js";

const Schema = mongoose.Schema;

const productFundSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    farmId: {
      type: Schema.Types.ObjectId,
      ref: "Farm",
    },
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
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
      },
    ],
    sector: {
      type: String,
      required: true,
      trim: true,
    },
    fundingGoal: {
      type: Number,
      required: true,
      min: 0,
    },
    fundedAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    profitSharing: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    weeklyInstallment: {
      type: Number,
      required: true,
      min: 0,
    },
    monthlyIncome: {
      type: Number,
      required: true,
      min: 0,
    },
    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },
    akad: {
      type: String,
      enum: ["Early funding", "Ongoing funding"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "Funded", "In Progress", "Completed", "Cancelled"],
      default: "Open",
    },
    startDate: {
      type: Date,
      validate: {
        validator: function (v) {
          return this.status === "Open" ? !v : !!v;
        },
        message: "Start date is required if the status is not 'Open'.",
      },
    },
    endDate: {
      type: Date,
    },
    backers: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        amount: {
          type: Number,
          required: true,
          min: 0,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    reports: [
      {
        reportDate: {
          type: Date,
          default: Date.now,
        },
        progress: {
          type: String,
          required: true,
          trim: true,
        },
        images: [
          {
            url: String,
            description: String,
          },
        ],
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ProductFund = mongoose.model("ProductFund", productFundSchema);

export default ProductFund;
