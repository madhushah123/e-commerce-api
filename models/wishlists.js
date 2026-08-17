import { Schema, model } from "mongoose";

// ======================
// WISHLIST SCHEMA
// ======================

const WishlistSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const Wishlist = model('Wishlist', WishlistSchema);

export default Wishlist;
