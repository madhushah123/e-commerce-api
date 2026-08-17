import { body, param } from "express-validator";

export const createCategoriesValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Category name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Category name must be between 2 and 100 characters"),
];

export const updateCategoriesValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid category ID"),

  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Category name cannot be empty")
    .isLength({ min: 2, max: 100 })
    .withMessage("Category name must be between 2 and 100 characters"),
];