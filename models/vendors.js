import { Schema, model } from "mongoose";

// ======================
// VENDOR SCHEMA
// ======================

const VendorSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    store_name: {
      type: String,
      required: true,
      trim: true,
    },

    store_description: {
      type: String,
      trim: true,
    },

    store_logo: {
      type: String,
    },

    status: {
      type: String,
      enum: ['pending', 'approved', 'suspended'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = model('Vendor', VendorSchema);

export default Vendor;
