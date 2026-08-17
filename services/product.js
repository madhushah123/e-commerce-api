import { NotFoundError } from "../errors/not-found.js";
import Product from "../models/product.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const product = await Product.create({ ...data, user: userId });
    return product;
}

export const getAll = async (userId) => {
    const products = await Product.find();
    return products;
}

export const getOne = async (_id, userId) => {
    const product = await Product.findOne({ _id, user: userId });
    if (!product) {
        throw new NotFoundError("Product not found!");
    }
    return product;
}

export const update = async (_id, data, userId) => {
    const product = await Product.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!product) throw new NotFoundError("Product not found!");
    return product;
}

export const destroy = async (_id, userId) => {
    const product = await Product.findOneAndDelete({ _id, user: userId });
    if (!product) throw new NotFoundError("Product not found!");
    return product;
};