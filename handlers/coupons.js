import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/coupons.js";
import { createCouponValidator, updateCouponValidator } from "../validators/coupons.js";

const COUPON_ROUTER = Router();

COUPON_ROUTER.post(
  "/",
  createCouponValidator,
  async (req, res, next) => {
    try {
      const coupon = await create(req.body, req.user);
      res.status(201).json({ data: coupon });
    } catch (error) {
      next(error);
    }
  }
);

COUPON_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const coupons = await getAll(req.user);
      res.status(200).json({ data: coupons });
    } catch (error) {
      next(error);
    }
  }
);

COUPON_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const coupon = await getOne(req.params.id, req.user);
      res.status(200).json({ data: coupon });
    } catch (error) {
      next(error);
    }
  }
);

COUPON_ROUTER.patch(
  "/:id",
  updateCouponValidator,
  async (req, res, next) => {
    try {
      const coupon = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: coupon });
    } catch (error) {
      next(error);
    }
  }
);

COUPON_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const coupon = await destroy(req.params.id, req.user);
      res.status(200).json({ data: coupon });
    } catch (error) {
      next(error);
    }
  }
);

export default COUPON_ROUTER;