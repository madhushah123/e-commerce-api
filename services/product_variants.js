import { NotFoundError } from "../errors/not-found.js";
import ProductVariants from "../models/product_variants.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const productVariant = await ProductVariants.create({ ...data, user: userId });
    return productVariant;
}

export const getAll = async (userId) => {
    const productVariants = await ProductVariants.find({ user: userId });
    return productVariants;
}

export const getOne = async (_id, userId) => {
    const productVariant = await ProductVariants.findOne({ _id, user: userId });
    if (!productVariant) {
        throw new NotFoundError("Product Variant not found!");
    }
    return productVariant;
}

export const update = async (_id, data, userId) => {
    const productVariant = await ProductVariants.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!productVariant) throw new NotFoundError("Product Variant not found!");
    return productVariant;
}

export const destroy = async (_id, userId) => {
    const productVariant = await ProductVariants.findOneAndDelete({ _id, user: userId });
    if (!productVariant) throw new NotFoundError("Product Variant not found!");
    return productVariant;
};