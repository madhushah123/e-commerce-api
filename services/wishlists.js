import { NotFoundError } from "../errors/not-found.js";
import Wishlists from "../models/wishlists.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const wishlist = await Wishlists.create({ ...data, user: userId });
    return wishlist;
}

export const getAll = async (userId) => {
    const wishlists = await Wishlists.find({ user: userId });
    return wishlists;
}

export const getOne = async (_id, userId) => {
    const wishlist = await Wishlists.findOne({ _id, user: userId });
    if (!wishlist) {
        throw new NotFoundError("Wishlist not found!");
    }
    return wishlist;
}

export const update = async (_id, data, userId) => {
    const wishlist = await Wishlists.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!wishlist) throw new NotFoundError("Wishlist not found!");
    return wishlist;
}

export const destroy = async (_id, userId) => {
    const wishlist = await Wishlists.findOneAndDelete({ _id, user: userId });
    if (!wishlist) throw new NotFoundError("Wishlist not found!");
    return wishlist;
};