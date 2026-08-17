import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/wishlists.js";
import { createWishlistValidator, updateWishlistValidator } from "../validators/wishlists.js";

const WISHLIST_ROUTER = Router();

WISHLIST_ROUTER.post(
  "/",
  createWishlistValidator,
  async (req, res, next) => {
    try {
      const wishlist = await create(req.body, req.user);
      res.status(201).json({ data: wishlist });
    } catch (error) {
      next(error);
    }
  }
);

WISHLIST_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const wishlists = await getAll(req.user);
      res.status(200).json({ data: wishlists });
    } catch (error) {
      next(error);
    }
  }
);

WISHLIST_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const wishlist = await getOne(req.params.id, req.user);
      res.status(200).json({ data: wishlist });
    } catch (error) {
      next(error);
    }
  }
);

WISHLIST_ROUTER.patch(
  "/:id",
  updateWishlistValidator,
  async (req, res, next) => {
    try {
      const wishlist = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: wishlist });
    } catch (error) {
      next(error);
    }
  }
);

WISHLIST_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const wishlist = await destroy(req.params.id, req.user);
      res.status(200).json({ data: wishlist });
    } catch (error) {
      next(error);
    }
  }
);

export default WISHLIST_ROUTER;