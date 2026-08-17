import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/reviews.js";
import { createReviewValidator, updateReviewValidator } from "../validators/reviews.js";

const REVIEW_ROUTER = Router();

REVIEW_ROUTER.post(
  "/",
  createReviewValidator,
  async (req, res, next) => {
    try {
      const review = await create(req.body, req.user);
      res.status(201).json({ data: review });
    } catch (error) {
      next(error);
    }
  }
);

REVIEW_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const reviews = await getAll(req.user);
      res.status(200).json({ data: reviews });
    } catch (error) {
      next(error);
    }
  }
);

REVIEW_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const review = await getOne(req.params.id, req.user);
      res.status(200).json({ data: review });
    } catch (error) {
      next(error);
    }
  }
);

REVIEW_ROUTER.patch(
  "/:id",
  updateReviewValidator,
  async (req, res, next) => {
    try {
      const review = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: review });
    } catch (error) {
      next(error);
    }
  }
);

REVIEW_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const review = await destroy(req.params.id, req.user);
      res.status(200).json({ data: review });
    } catch (error) {
      next(error);
    }
  }
);

export default REVIEW_ROUTER;