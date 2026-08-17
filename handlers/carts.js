import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/carts.js";
import { createCartsValidator, updateCartsValidator } from "../validators/carts.js";

const CART_ROUTER = Router();

CART_ROUTER.post(
  "/",
  createCartsValidator,
  async (req, res, next) => {
    try {
      const cart = await create(req.body, req.user);
      res.status(201).json({ data: cart });
    } catch (error) {
      next(error);
    }
  }
);

CART_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const carts = await getAll(req.user);
      res.status(200).json({ data: carts });
    } catch (error) {
      next(error);
    }
  }
);

CART_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const cart = await getOne(req.params.id, req.user);
      res.status(200).json({ data: cart });
    } catch (error) {
      next(error);
    }
  }
);

CART_ROUTER.patch(
  "/:id",
  updateCartsValidator,
  async (req, res, next) => {
    try {
      const cart = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: cart });
    } catch (error) {
      next(error);
    }
  }
);

CART_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const cart = await destroy(req.params.id, req.user);
      res.status(200).json({ data: cart });
    } catch (error) {
      next(error);
    }
  }
);

export default CART_ROUTER;