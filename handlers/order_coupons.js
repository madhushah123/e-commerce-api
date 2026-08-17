import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/order_coupons.js";
import {
  createOrderCouponValidator,
  updateOrderCouponValidator,
} from "../validators/order_coupons.js";

const ORDER_COUPON_ROUTER = Router();

ORDER_COUPON_ROUTER.post(
  "/",
  createOrderCouponValidator,
  async (req, res, next) => {
    try {
      const orderCoupon = await create(req.body, req.user);
      res.status(201).json({ data: orderCoupon });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_COUPON_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const orderCoupons = await getAll(req.user);
      res.status(200).json({ data: orderCoupons });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_COUPON_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const orderCoupon = await getOne(req.params.id, req.user);
      res.status(200).json({ data: orderCoupon });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_COUPON_ROUTER.patch(
  "/:id",
  updateOrderCouponValidator,
  async (req, res, next) => {
    try {
      const orderCoupon = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: orderCoupon });
    } catch (error) {
      next(error);
    }
  }
);

ORDER_COUPON_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const orderCoupon = await destroy(req.params.id, req.user);
      res.status(200).json({ data: orderCoupon });
    } catch (error) {
      next(error);
    }
  }
);

export default ORDER_COUPON_ROUTER;