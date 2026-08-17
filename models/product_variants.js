import { Schema, model } from "mongoose";

// ======================
// PRODUCT VARIANT SCHEMA
// ======================

const ProductVariantSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },

    size: {
      type: String,
      trim: true,
    },

    color: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ProductVariant = model('ProductVariant', ProductVariantSchema);

export default ProductVariant;
