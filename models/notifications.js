import { Schema, model } from "mongoose";

// ======================
// NOTIFICATION SCHEMA
// ======================

const NotificationSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title:{
        type: String,
        required: true,
    },
    message: {
      type: String,
      required: true,
    },
    is_read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = model('Notification', NotificationSchema);

export default Notification;
