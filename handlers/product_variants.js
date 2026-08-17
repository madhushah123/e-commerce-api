import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/product_variants.js";
import { createProductVariantValidator, updateProductVariantValidator } from "../validators/product_variants.js";

const PRODUCT_VARIANT_ROUTER = Router();

PRODUCT_VARIANT_ROUTER.post(
  "/",
  createProductVariantValidator,
  async (req, res, next) => {
    try {
      const productVariant = await create(req.body, req.user);
      res.status(201).json({ data: productVariant });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_VARIANT_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const productVariants = await getAll(req.user);
      res.status(200).json({ data: productVariants });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_VARIANT_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const productVariant = await getOne(req.params.id, req.user);
      res.status(200).json({ data: productVariant });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_VARIANT_ROUTER.patch(
  "/:id",
  updateProductVariantValidator,
  async (req, res, next) => {
    try {
      const productVariant = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: productVariant });
    } catch (error) {
      next(error);
    }
  }
);

PRODUCT_VARIANT_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const productVariant = await destroy(req.params.id, req.user);
      res.status(200).json({ data: productVariant });
    } catch (error) {
      next(error);
    }
  }
);

export default PRODUCT_VARIANT_ROUTER;