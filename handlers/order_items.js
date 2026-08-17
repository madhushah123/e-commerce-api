import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/order_items.js";
import { createOrderItemValidator, updateOrderItemValidator } from "../validators/order_items.js";

const ORDER_ITEM_ROUTER = Router();

ORDER_ITEM_ROUTER.post(
  "/",
  createOrderItemValidator,
  async (req, res, next) => {
    try {
      const orderItem = await create(req.body, req.user);
      res.status(201).json({ data: orderItem });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ITEM_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const orderItems = await getAll(req.user);
      res.status(200).json({ data: orderItems });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ITEM_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const orderItem = await getOne(req.params.id, req.user);
      res.status(200).json({ data: orderItem });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ITEM_ROUTER.patch(
  "/:id",
  updateOrderItemValidator,
  async (req, res, next) => {
    try {
      const orderItem = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: orderItem });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_ITEM_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const orderItem = await destroy(req.params.id, req.user);
      res.status(200).json({ data: orderItem });
    } catch (error) {
      next(error);
    }
  }
);

export default ORDER_ITEM_ROUTER;