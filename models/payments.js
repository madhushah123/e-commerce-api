import { Schema, model } from "mongoose";

// ======================
// PAYMENT SCHEMA
// ======================

const PaymentSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },

    transaction_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    payment_method: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      default: 0,
    },

    status: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },

    paid_at: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = model('Payment', PaymentSchema);

export default Payment;
