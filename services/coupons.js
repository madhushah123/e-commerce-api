import { NotFoundError } from "../errors/not-found.js";
import Coupons from "../models/coupons.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const coupon = await Coupons.create({ ...data, user: userId });
    return coupon;
}

export const getAll = async (userId) => {
    const coupons = await Coupons.find({ user: userId });
    return coupons;
}

export const getOne = async (_id, userId) => {
    const coupon = await Coupons.findOne({ _id, user: userId });
    if (!coupon) {
        throw new NotFoundError("Coupon not found!");
    }
    return coupon;
}

export const update = async (_id, data, userId) => {
    const coupon = await Coupons.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!coupon) throw new NotFoundError("Coupon not found!");
    return coupon;
}

export const destroy = async (_id, userId) => {
    const coupon = await Coupons.findOneAndDelete({ _id, user: userId });
    if (!coupon) throw new NotFoundError("Coupon not found!");
    return coupon;
};