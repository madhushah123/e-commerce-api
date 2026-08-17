import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/payments.js";
import { createPaymentValidator, updatePaymentValidator } from "../validators/payments.js";

const PAYMENT_ROUTER = Router();

PAYMENT_ROUTER.post(
  "/",
  createPaymentValidator,
  async (req, res, next) => {
    try {
      const payment = await create(req.body, req.user);
      res.status(201).json({ data: payment });
    } catch (error) {
      next(error);
    }
  }
);

PAYMENT_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const payments = await getAll(req.user);
      res.status(200).json({ data: payments });
    } catch (error) {
      next(error);
    }
  }
);

PAYMENT_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const payment = await getOne(req.params.id, req.user);
      res.status(200).json({ data: payment });
    } catch (error) {
      next(error);
    }
  }
);

PAYMENT_ROUTER.patch(
  "/:id",
  updatePaymentValidator,
  async (req, res, next) => {
    try {
      const payment = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: payment });
    } catch (error) {
      next(error);
    }
  }
);

PAYMENT_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const payment = await destroy(req.params.id, req.user);
      res.status(200).json({ data: payment });
    } catch (error) {
      next(error);
    }
  }
);

export default PAYMENT_ROUTER;