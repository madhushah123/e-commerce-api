import { NotFoundError } from "../errors/not-found.js";
import OrderCoupons from "../models/order_coupons.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const orderCoupon = await OrderCoupons.create({ ...data, user: userId });
    return orderCoupon;
}

export const getAll = async (userId) => {
    const orderCoupons = await OrderCoupons.find({ user: userId });
    return orderCoupons;
}

export const getOne = async (_id, userId) => {
    const orderCoupon = await OrderCoupons.findOne({ _id, user: userId });
    if (!orderCoupon) {
        throw new NotFoundError("Order Coupon not found!");
    }
    return orderCoupon;
}

export const update = async (_id, data, userId) => {
    const orderCoupon = await OrderCoupons.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!orderCoupon) throw new NotFoundError("Order Coupon not found!");
    return orderCoupon;
}

export const destroy = async (_id, userId) => {
    const orderCoupon = await OrderCoupons.findOneAndDelete({ _id, user: userId });
    if (!orderCoupon) throw new NotFoundError("Order Coupon not found!");
    return orderCoupon;
};