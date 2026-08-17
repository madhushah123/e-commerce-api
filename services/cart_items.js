import { NotFoundError } from "../errors/not-found.js";
import CartItems from "../models/cart_items.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const cartItem = await CartItems.create({ ...data, user: userId });
    return cartItem;
}

export const getAll = async (userId) => {
    const cartItems = await CartItems.find({ user: userId });
    return cartItems;
}

export const getOne = async (_id, userId) => {
    const cartItem = await CartItems.findOne({ _id, user: userId });
    if (!cartItem) {
        throw new NotFoundError("Cart item not found!");
    }
    return cartItem;
}

export const update = async (_id, data, userId) => {
    const cartItem = await CartItems.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!cartItem) throw new NotFoundError("Cart item not found!");
    return cartItem;
}

export const destroy = async (_id, userId) => {
    const cartItem = await CartItems.findOneAndDelete({ _id, user: userId });
    if (!cartItem) throw new NotFoundError("Cart item not found!");
    return cartItem;
};