import { Schema, model } from "mongoose";

// ======================
// PRODUCT IMAGE SCHEMA
// ======================

const ProductImageSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },

    image_url: {
      type: String,
      required: true,
      trim: true,
    },

    is_primary: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProductImage = model('ProductImage', ProductImageSchema);

export default ProductImage;
