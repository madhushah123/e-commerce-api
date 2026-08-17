import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/product_images.js";
import { createProductImageValidator, updateProductImageValidator } from "../validators/product_images.js";

const PRODUCT_IMAGE_ROUTER = Router();

PRODUCT_IMAGE_ROUTER.post(
  "/",
  createProductImageValidator,
  async (req, res, next) => {
    try {
      const productImage = await create(req.body, req.user);
      res.status(201).json({ data: productImage });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_IMAGE_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const productImages = await getAll(req.user);
      res.status(200).json({ data: productImages });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_IMAGE_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const productImage = await getOne(req.params.id, req.user);
      res.status(200).json({ data: productImage });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_IMAGE_ROUTER.patch(
  "/:id",
  updateProductImageValidator,
  async (req, res, next) => {
    try {
      const productImage = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: productImage });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_IMAGE_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const productImage = await destroy(req.params.id, req.user);
      res.status(200).json({ data: productImage });
    } catch (error) {
      next(error);
    }
  }
);

export default PRODUCT_IMAGE_ROUTER;