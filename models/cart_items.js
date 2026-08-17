import { Schema, model } from "mongoose";

const CartItemSchema = new Schema(
    {   
        cart_id: {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        variant_id: {
            type: Schema.Types.ObjectId,
            ref: 'ProductVariant',
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

const CartItem = model('CartItem', CartItemSchema);

export default CartItem;
