import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/brands.js";
import { createBrandValidator, updateBrandValidator } from "../validators/brands.js";

const BRAND_ROUTER = Router();

BRAND_ROUTER.post(
  "/",
  createBrandValidator,
  async (req, res, next) => {
    try {
      const brand = await create(req.body, req.user);
      res.status(201).json({ data: brand });
    } catch (error) {
      next(error);
    }
  }
);

BRAND_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const brands = await getAll(req.user);
      res.status(200).json({ data: brands });
    } catch (error) {
      next(error);
    }
  }
);

BRAND_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const brand = await getOne(req.params.id, req.user);
      res.status(200).json({ data: brand });
    } catch (error) {
      next(error);
    }
  }
);

BRAND_ROUTER.patch(
  "/:id",
  updateBrandValidator,
  async (req, res, next) => {
    try {
      const brand = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: brand });
    } catch (error) {
      next(error);
    }
  }
);

BRAND_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const brand = await destroy(req.params.id, req.user);
      res.status(200).json({ data: brand });
    } catch (error) {
      next(error);
    }
  }
);

export default BRAND_ROUTER;