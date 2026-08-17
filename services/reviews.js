import { NotFoundError } from "../errors/not-found.js";
import Reviews from "../models/reviews.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const review = await Reviews.create({ ...data, user: userId });
    return review;
}

export const getAll = async (userId) => {
    const reviews = await Reviews.find({ user: userId });
    return reviews;
}

export const getOne = async (_id, userId) => {
    const review = await Reviews.findOne({ _id, user: userId });
    if (!review) {
        throw new NotFoundError("Review not found!");
    }
    return review;
}

export const update = async (_id, data, userId) => {
    const review = await Reviews.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!review) throw new NotFoundError("Review not found!");
    return review;
}

export const destroy = async (_id, userId) => {
    const review = await Reviews.findOneAndDelete({ _id, user: userId });
    if (!review) throw new NotFoundError("Review not found!");
    return review;
};