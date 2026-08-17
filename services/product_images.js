import { NotFoundError } from "../errors/not-found.js";
import ProductImages from "../models/product_images.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const productImage = await ProductImages.create({ ...data, user: userId });
    return productImage;
}

export const getAll = async (userId) => {
    const productImages = await ProductImages.find({ user: userId });
    return productImages;
}

export const getOne = async (_id, userId) => {
    const productImage = await ProductImages.findOne({ _id, user: userId });
    if (!productImage) {
        throw new NotFoundError("Product Image not found!");
    }
    return productImage;
}

export const update = async (_id, data, userId) => {
    const productImage = await ProductImages.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!productImage) throw new NotFoundError("Product Image not found!");
    return productImage;
}

export const destroy = async (_id, userId) => {
    const productImage = await ProductImages.findOneAndDelete({ _id, user: userId });
    if (!productImage) throw new NotFoundError("Product Image not found!");
    return productImage;
};