import { NotFoundError } from "../errors/not-found.js";
import Payments from "../models/payments.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const payment = await Payments.create({ ...data, user: userId });
    return payment;
}

export const getAll = async (userId) => {
    const payments = await Payments.find({ user: userId });
    return payments;
}

export const getOne = async (_id, userId) => {
    const payment = await Payments.findOne({ _id, user: userId });
    if (!payment) {
        throw new NotFoundError("Payment not found!");
    }
    return payment;
}

export const update = async (_id, data, userId) => {
    const payment = await Payments.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!payment) throw new NotFoundError("Payment not found!");
    return payment;
}

export const destroy = async (_id, userId) => {
    const payment = await Payments.findOneAndDelete({ _id, user: userId });
    if (!payment) throw new NotFoundError("Payment not found!");
    return payment;
};