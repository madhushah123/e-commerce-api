import { NotFoundError } from "../errors/not-found.js";
import OrderItems from "../models/order_items.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const orderItem = await OrderItems.create({ ...data, user: userId });
    return orderItem;
}

export const getAll = async (userId) => {
    const orderItems = await OrderItems.find({ user: userId });
    return orderItems;
}

export const getOne = async (_id, userId) => {
    const orderItem = await OrderItems.findOne({ _id, user: userId });
    if (!orderItem) {
        throw new NotFoundError("Order Item not found!");
    }
    return orderItem;
}

export const update = async (_id, data, userId) => {
    const orderItem = await OrderItems.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!orderItem) throw new NotFoundError("Order Item not found!");
    return orderItem;
}

export const destroy = async (_id, userId) => {
    const orderItem = await OrderItems.findOneAndDelete({ _id, user: userId });
    if (!orderItem) throw new NotFoundError("Order Item not found!");
    return orderItem;
};