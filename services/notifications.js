import { NotFoundError } from "../errors/not-found.js";
import Notification from "../models/notifications.js";

export const create = async (data, userId) => {
    const notification = await Notification.create({ ...data, user_id: userId });
    return notification;
};

export const getAll = async (userId) => {
    const notifications = await Notification.find({ user_id: userId });
    return notifications;
};

export const getOne = async (_id, userId) => {
    const notification = await Notification.findOne({ _id, user_id: userId });
    if (!notification) {
        throw new NotFoundError("Notification not found!");
    }
    return notification;
};

export const update = async (_id, data, userId) => {
    const notification = await Notification.findOneAndUpdate(
        { _id, user_id: userId },
        data,
        { returnDocument: 'after' }
    );
    if (!notification) throw new NotFoundError("Notification not found!");
    return notification;
};

export const destroy = async (_id, userId) => {
    const notification = await Notification.findOneAndDelete({ _id, user_id: userId });
    if (!notification) throw new NotFoundError("Notification not found!");
    return notification;
};