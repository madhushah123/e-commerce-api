import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/categories.js";
import {
  createCategoriesValidator,
  updateCategoriesValidator,
} from "../validators/categories.js";

const CATEGORIES_ROUTER = Router();

CATEGORIES_ROUTER.post(
  "/",
  createCategoriesValidator,
  async (req, res, next) => {
    try {
      const category = await create(req.body, req.user);
      res.status(201).json({ data: category });
    } catch (error) {
      next(error);
    }
  }
);

CATEGORIES_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const categories = await getAll(req.user);
      res.status(200).json({ data: categories });
    } catch (error) {
      next(error);
    }
  }
);

CATEGORIES_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const category = await getOne(req.params.id, req.user);
      res.status(200).json({ data: category });
    } catch (error) {
      next(error);
    }
  }
);

CATEGORIES_ROUTER.patch(
  "/:id",
  updateCategoriesValidator,
  async (req, res, next) => {
    try {
      const category = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: category });
    } catch (error) {
      next(error);
    }
  }
);

CATEGORIES_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const category = await destroy(req.params.id, req.user);
      res.status(200).json({ data: category });
    } catch (error) {
      next(error);
    }
  }
);

export default CATEGORIES_ROUTER;