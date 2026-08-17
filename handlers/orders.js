import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/orders.js";
import { createOrderValidator, updateOrderValidator } from "../validators/orders.js";

const ORDER_ROUTER = Router();

ORDER_ROUTER.post(
  "/",
  createOrderValidator,
  async (req, res, next) => {
    try {
      const order = await create(req.body, req.user);
      res.status(201).json({ data: order });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const orders = await getAll(req.user);
      res.status(200).json({ data: orders });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const order = await getOne(req.params.id, req.user);
      res.status(200).json({ data: order });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ROUTER.patch(
  "/:id",
  updateOrderValidator,
  async (req, res, next) => {
    try {
      const order = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: order });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const order = await destroy(req.params.id, req.user);
      res.status(200).json({ data: order });
    } catch (error) {
      next(error);
    }
  }
);

export default ORDER_ROUTER;