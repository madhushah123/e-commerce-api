import { Schema, model } from "mongoose";

// ======================
// CART SCHEMA
// ======================

const CartSchema = new Schema(
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

    variant_id: {
      type: Schema.Types.ObjectId,
      ref: 'Variant',
    },

    coupon_id: {
      type: Schema.Types.ObjectId,
      ref: 'Coupon',
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    total_price: {
      type: Number,
      required: true,
      default: 0,
    },

    discounted_price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = model('Cart', CartSchema);

export default Cart;
