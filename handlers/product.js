import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/product.js";
import { createProductValidator, updateProductValidator } from "../validators/product.js";

const PRODUCT_ROUTER = Router();

PRODUCT_ROUTER.post(
  "/",
  createProductValidator,
  async (req, res, next) => {
    try {
      const product = await create(req.body, req.user);
      res.status(201).json({ data: product });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const products = await getAll(req.user);
      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const product = await getOne(req.params.id, req.user);
      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_ROUTER.patch(
  "/:id",
  updateProductValidator,
  async (req, res, next) => {
    try {
      const product = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const product = await destroy(req.params.id, req.user);
      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }
);

export default PRODUCT_ROUTER;