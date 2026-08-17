import { Router } from "express";
import { create, destroy, getAll, getOne, update } from "../services/notifications.js";
import { createNotificationValidator, updateNotificationValidator } from "../validators/notifications.js";

const NOTIFICATION_ROUTER = Router();

NOTIFICATION_ROUTER.post(
  "/",
  createNotificationValidator,
  async (req, res, next) => {
    try {
      const notification = await create(req.body, req.user);
      res.status(201).json({ data: notification });
    } catch (error) {
      next(error);
    }
  }
);

NOTIFICATION_ROUTER.get(
  "/",
  async (req, res, next) => {
    try {
      const notifications = await getAll(req.user);
      res.status(200).json({ data: notifications });
    } catch (error) {
      next(error);
    }
  }
);

NOTIFICATION_ROUTER.get(
  "/:id",
  async (req, res, next) => {
    try {
      const notification = await getOne(req.params.id, req.user);
      res.status(200).json({ data: notification });
    } catch (error) {
      next(error);
    }
  }
);

NOTIFICATION_ROUTER.patch(
  "/:id",
  updateNotificationValidator,
  async (req, res, next) => {
    try {
      const notification = await update(req.params.id, req.body, req.user);
      res.status(200).json({ data: notification });
    } catch (error) {
      next(error);
    }
  }
);

NOTIFICATION_ROUTER.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const notification = await destroy(req.params.id, req.user);
      res.status(200).json({ data: notification });
    } catch (error) {
      next(error);
    }
  }
);

export default NOTIFICATION_ROUTER;