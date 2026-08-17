import { Schema, model } from "mongoose";

// ======================
// PRODUCT SCHEMA
// ======================

const ProductSchema = new Schema(
  {
    vendor_id: {
      type: Schema.Types.ObjectId,
      ref: 'Vendor',
      required: true,
    },

    category_id: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },

    brand_id: {
      type: Schema.Types.ObjectId,
      ref: 'Brand',
    },

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

    description: {
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

    sku: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ['active', 'inactive', 'out_of_stock'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Product = model('Product', ProductSchema);

export default Product;
