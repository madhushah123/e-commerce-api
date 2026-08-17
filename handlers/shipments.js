import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/shipments.js";
import { createShipmentValidator, updateShipmentValidator } from "../validators/shipments.js";

const SHIPMENT_ROUTER = Router();

SHIPMENT_ROUTER.post(
  "/",
  createShipmentValidator,
  async (req, res, next) => {
    try {
      const shipment = await create(req.body, req.user);
      res.status(201).json({ data: shipment });
    } catch (error) {
      next(error);
    }
  }
);

SHIPMENT_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const shipments = await getAll(req.user);
      res.status(200).json({ data: shipments });
    } catch (error) {
      next(error);
    }
  }
);

SHIPMENT_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const shipment = await getOne(req.params.id, req.user);
      res.status(200).json({ data: shipment });
    } catch (error) {
      next(error);
    }
  }
);

SHIPMENT_ROUTER.patch(
  "/:id",
  updateShipmentValidator,
  async (req, res, next) => {
    try {
      const shipment = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: shipment });
    } catch (error) {
      next(error);
    }
  }
);

SHIPMENT_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const shipment = await destroy(req.params.id, req.user);
      res.status(200).json({ data: shipment });
    } catch (error) {
      next(error);
    }
  }
);

export default SHIPMENT_ROUTER;