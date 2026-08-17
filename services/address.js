import Address from "../models/address.js";
import { NotFoundError } from "../errors/not-found.js";

export const create = async (data, userId) => {
  const address = await Address.create({ ...data, user: userId });
  return address;
};

export const getAll = async (userId) => {
  const addresses = await Address.find({ user: userId });
  return addresses;
};

export const getOne = async (id, userId) => {
  const address = await Address.findOne({
    _id: id,
    user: userId,
  })
  if (!address) throw new NotFoundError("Address not found");
  return address;
};

export const update = async (id, addressData, userId) => {
  const address = await Address.findOneAndUpdate(
    { _id: id, user: userId },
    addressData,
    { returnDocument: 'after' }
  );
  if (!address) throw new NotFoundError("Address not found");
  return address;
};

export const destroy = async (id, userId) => {
  const address = await Address.findOneAndDelete({ _id: id, user: userId });
  if (!address)throw new NotFoundError("Address not found");
  return address;
};