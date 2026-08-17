import { Schema, model } from "mongoose";

// ======================
// BRAND SCHEMA
// ======================

const BrandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Brand = model('Brand', BrandSchema);

export default Brand;
