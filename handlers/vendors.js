import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/vendors.js";
import { createVendorValidator, updateVendorValidator } from "../validators/vendors.js";

const VENDOR_ROUTER = Router();

VENDOR_ROUTER.post(
  "/",
  createVendorValidator,
  async (req, res, next) => {
    try {
      const vendor = await create(req.body, req.user);
      res.status(201).json({ data: vendor });
    } catch (error) {
      next(error);
    }
  }
);

VENDOR_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const vendors = await getAll(req.user);
      res.status(200).json({ data: vendors });
    } catch (error) {
      next(error);
    }
  }
);

VENDOR_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const vendor = await getOne(req.params.id, req.user);
      res.status(200).json({ data: vendor });
    } catch (error) {
      next(error);
    }
  }
);

VENDOR_ROUTER.patch(
  "/:id",
  updateVendorValidator,
  async (req, res, next) => {
    try {
      const vendor = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: vendor });
    } catch (error) {
      next(error);
    }
  }
);

VENDOR_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const vendor = await destroy(req.params.id, req.user);
      res.status(200).json({ data: vendor });
    } catch (error) {
      next(error);
    }
  }
);

export default VENDOR_ROUTER;