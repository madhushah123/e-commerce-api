import { NotFoundError } from "../errors/not-found.js";
import Vendors from "../models/vendors.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const vendor = await Vendors.create({ ...data, user: userId });
    return vendor;
}

export const getAll = async (userId) => {
    const vendors = await Vendors.find({ user: userId });
    return vendors;
}

export const getOne = async (_id, userId) => {
    const vendor = await Vendors.findOne({ _id, user: userId });
    if (!vendor) {
        throw new NotFoundError("Vendor not found!");
    }
    return vendor;
}

export const update = async (_id, data, userId) => {
    const vendor = await Vendors.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!vendor) throw new NotFoundError("Vendor not found!");
    return vendor;
}

export const destroy = async (_id, userId) => {
    const vendor = await Vendors.findOneAndDelete({ _id, user: userId });
    if (!vendor) throw new NotFoundError("Vendor not found!");
    return vendor;
};