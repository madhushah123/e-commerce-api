import { NotFoundError } from "../errors/not-found.js";
import Carts from "../models/carts.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const cart = await Carts.create({ ...data, user: userId });
    return cart;
}

export const getAll = async (userId) => {
    const carts = await Carts.find({ user: userId });
    return carts;
}

export const getOne = async (_id, userId) => {
    const cart = await Carts.findOne({ _id, user: userId });
    if (!cart) {
        throw new NotFoundError("Cart not found!");
    }
    return cart;
}

export const update = async (_id, data, userId) => {
    const cart = await Carts.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!cart) throw new NotFoundError("Cart not found!");
    return cart;
}

export const destroy = async (_id, userId) => {
    const cart = await Carts.findOneAndDelete({ _id, user: userId });
    if (!cart) throw new NotFoundError("Cart not found!");
    return cart;
};