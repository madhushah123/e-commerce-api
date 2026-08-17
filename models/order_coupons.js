import { Schema, model } from "mongoose";

// ======================
// ORDER COUPON SCHEMA
// ======================

const OrderCouponSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },

    coupon_id: {
      type: Schema.Types.ObjectId,
      ref: 'Coupon',
      required: true,
    },

    discount_amount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const OrderCoupon = model('OrderCoupon', OrderCouponSchema);

export default OrderCoupon;
