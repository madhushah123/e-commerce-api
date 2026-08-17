import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/cart_items.js";
import { createCartItemsValidator, updateCartItemsValidator } from "../validators/cart_items.js";

const CART_ITEMS_ROUTER = Router();

CART_ITEMS_ROUTER.post(
  "/",
  createCartItemsValidator,
  async (req, res, next) => {
    try {
      const cart_item = await create(req.body, req.user);
      res.status(201).json({ data: cart_item });
    } catch (error) {
      next(error);
    }
  }
);

CART_ITEMS_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const cart_items = await getAll(req.user);
      res.status(200).json({ data: cart_items });
    } catch (error) {
      next(error);
    }
  }
);

CART_ITEMS_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const cart_item = await getOne(req.params.id, req.user);
      res.status(200).json({ data: cart_item });
    } catch (error) {
      next(error);
    }
  }
);

CART_ITEMS_ROUTER.patch(
  "/:id",
  updateCartItemsValidator,
  async (req, res, next) => {
    try {
      const cart_item = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: cart_item });
    } catch (error) {
      next(error);
    }
  }
);

CART_ITEMS_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const cart_item = await destroy(req.params.id, req.user);
      res.status(200).json({ data: cart_item });
    } catch (error) {
      next(error);
    }
  }
);

export default CART_ITEMS_ROUTER;