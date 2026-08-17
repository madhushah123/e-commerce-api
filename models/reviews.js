import { Schema, model } from "mongoose";

// ======================
// REVIEW SCHEMA
// ======================

const ReviewSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = model('Review', ReviewSchema);

export default Review;
