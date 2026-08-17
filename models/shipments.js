import { Schema, model } from "mongoose";

// ======================
// SHIPMENT SCHEMA
// ======================

const ShipmentSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },

    tracking_number: {
      type: String,
      trim: true,
    },

    courier_name: {
      type: String,
      trim: true,
    },

    shipment_status: {
      type: String,
      enum: ['pending', 'shipped', 'delivered'],
      default: 'pending',
    },

    shipped_at: {
      type: Date,
    },

    delivered_at: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Shipment = model('Shipment', ShipmentSchema);

export default Shipment;
