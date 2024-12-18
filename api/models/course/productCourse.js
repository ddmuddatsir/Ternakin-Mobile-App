import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productCourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["cow", "chicken", "goat", "sheep", "fish", "pig", "duck", "other"],
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  videoContent: [
    {
      title: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  author: {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
  },
  thumbnail: {
    type: String,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  totalEnrollments: {
    type: Number,
    default: 0,
  },
  requirements: [
    {
      type: String,
    },
  ],
  youWillLearn: [
    {
      type: String,
    },
  ],
  language: {
    type: String,
    enum: ["English", "Indonesian"],
    required: true,
  },
  lastUpdated: {
    type: Date,
    required: true,
  },
  carbonCopy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductCourse = mongoose.model("ProductCourse", productCourseSchema);

export default ProductCourse;
