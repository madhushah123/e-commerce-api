import { Schema, model } from "mongoose";

// ======================
// ORDER ITEM SCHEMA
// ======================

const OrderItemSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },

    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },

    vendor_id: {
      type: Schema.Types.ObjectId,
      ref: 'Vendor',
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    },

    unit_price: {
      type: Number,
      required: true,
      default: 0,
    },

    total_price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const OrderItem = model('OrderItem', OrderItemSchema);

export default OrderItem;
