import { Schema, model } from "mongoose";

// ======================
// ORDER SCHEMA
// ======================

const OrderSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    address_id: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },

    order_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    total_amount: {
      type: Number,
      required: true,
      default: 0,
    },

    payment_status: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },

    order_status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },

    payment_method: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = model('Order', OrderSchema);

export default Order;
