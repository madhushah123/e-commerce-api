import { NotFoundError } from "../errors/not-found.js";
import Shipments from "../models/shipments.js";

export const create = async (data, userId) => { // data => { name: "jacket" }
    /**
     * create(data)=> create({ ...data, user: userId }) 
     * create({ name: "jacket" }) => create({ name: "jacket", user: "<userId>" })
     */

    const shipment = await Shipments.create({ ...data, user: userId });
    return shipment;
}

export const getAll = async (userId) => {
    const shipments = await Shipments.find({ user: userId });
    return shipments;
}

export const getOne = async (_id, userId) => {
    const shipment = await Shipments.findOne({ _id, user: userId });
    if (!shipment) {
        throw new NotFoundError("Shipment not found!");
    }
    return shipment;
}

export const update = async (_id, data, userId) => {
    const shipment = await Shipments.findOneAndUpdate({ _id, user: userId }, data, { returnDocument: 'after' });
    if (!shipment) throw new NotFoundError("Shipment not found!");
    return shipment;
}

export const destroy = async (_id, userId) => {
    const shipment = await Shipments.findOneAndDelete({ _id, user: userId });
    if (!shipment) throw new NotFoundError("Shipment not found!");
    return shipment;
};