import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/address.js";
import { createAddressValidator, updateAddressValidator } from "../validators/address.js";

const ADDRESS_ROUTER = Router();

ADDRESS_ROUTER.post(
  "/",
  createAddressValidator,
  async (req, res, next) => {
    try {
      const address = await create(req.body, req.user);
      res.status(201).json({ data: address });
    } catch (error) {
      next(error);
    }
  }
);

ADDRESS_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const addresses = await getAll(req.user);
      res.status(200).json({ data: addresses });
    } catch (error) {
      next(error);
    }
  }
);

ADDRESS_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const address = await getOne(req.params.id, req.user);
      res.status(200).json({ data: address });
    } catch (error) {
      next(error);
    }
  }
);

ADDRESS_ROUTER.patch(
  "/:id",
  updateAddressValidator,
  async (req, res, next) => {
    try {
      const address = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: address });
    } catch (error) {
      next(error);
    }
  }
);

ADDRESS_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const address = await destroy(req.params.id, req.user);
      res.status(200).json({ data: address });
    } catch (error) {
      next(error);
    }
  }
);

export default ADDRESS_ROUTER;