import { Schema, model } from "mongoose";

// ======================
// COUPONS SCHEMA
// ======================

const CouponsSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    discount_type: {
      type: String,
      required: true,
      enum: ['percentage', 'fixed'],
    },
    discount_value: {
      type: Number,
      required: true,   
    },
    expirationDate: {
      type: Date,
      required: true,
    },      
  },
  {
    timestamps: true,
  }
);

const Coupons = model('Coupons', CouponsSchema);

export default Coupons;
