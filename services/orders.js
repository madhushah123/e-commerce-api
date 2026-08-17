import { NotFoundError } from "../errors/not-found.js";
import Orders from "../models/orders.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const order = await Orders.create({ ...data, user: userId });
    return order;
}

export const getAll = async (userId) => {
    const orders = await Orders.find({ user: userId });
    return orders;
}

export const getOne = async (_id, userId) => {
    const order = await Orders.findOne({ _id, user: userId });
    if (!order) {
        throw new NotFoundError("Order not found!");
    }
    return order;
}

export const update = async (_id, data, userId) => {
    const order = await Orders.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!order) throw new NotFoundError("Order not found!");
    return order;
}

export const destroy = async (_id, userId) => {
    const order = await Orders.findOneAndDelete({ _id, user: userId });
    if (!order) throw new NotFoundError("Order not found!");
    return order;
};