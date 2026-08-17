import { NotFoundError } from "../errors/not-found.js";
import Brands from "../models/brands.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const brand = await Brands.create({ ...data, user: userId });
    return brand;
}

export const getAll = async (userId) => {
    const brands = await Brands.find({ user: userId });
    return brands;
}

export const getOne = async (_id, userId) => {
    const brand = await Brands.findOne({ _id, user: userId });
    if (!brand) {
        throw new NotFoundError("Brand not found!");
    }
    return brand;
}

export const update = async (_id, data, userId) => {
    const brand = await Brands.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!brand) throw new NotFoundError("Brand not found!");
    return brand;
}

export const destroy = async (_id, userId) => {
    const brand = await Brands.findOneAndDelete({ _id, user: userId });
    if (!brand) throw new NotFoundError("Brand not found!");
    return brand;
};