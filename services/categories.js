import { NotFoundError } from "../errors/not-found.js";
import Categories from "../models/categories.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const category = await Categories.create({ ...data, user: userId });
    return category;
}

export const getAll = async (userId) => {
    const categories = await Categories.find({ user: userId });
    return categories;
}

export const getOne = async (_id, userId) => {
    const category = await Categories.findOne({ _id, user: userId });
    if (!category) {
        throw new NotFoundError("Category not found!");
    }
    return category;
}

export const update = async (_id, data, userId) => {
    const category = await Categories.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!category) throw new NotFoundError("Category not found!");
    return category;
}

export const destroy = async (_id, userId) => {
    const category = await Categories.findOneAndDelete({ _id, user: userId });
    if (!category) throw new NotFoundError("Category not found!");
    return category;
};