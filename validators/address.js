import { body } from "express-validator";
import { validate } from "./validate.js";
import { ValidationError } from "../errors/validation.js";

export const createAddressValidator = [
  body("street")
    .trim()
    .notEmpty()
    .withMessage("Street is required"),
  body("city")
    .trim()
    .notEmpty()
    .withMessage("City is required"),
  body("state")
    .trim()
    .notEmpty()
    .withMessage("State is required"),
  body("zipCode")
    .trim()
    .notEmpty()
    .withMessage("Zip code is required"),
  validate,
];

export const updateAddressValidator = [
  body("street")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("Street is required"),
  body("city")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("City is required"),
  body("state")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("State is required"),
  body("zipCode")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("Start date is required")
    .isDate()
    .withMessage("Start date must be a date"),
  body("endDate")
    .trim()
    .notEmpty()
    .withMessage("End date is required")
    .isDate()
    .withMessage("End date must be a date")
    .custom((value, { req }) => {
      if (value < req.body.startDate) {
        throw new ValidationError("End date must be after start date");
      }
      return true;
    }),
  body("destinations")
    .trim()
    .notEmpty()
    .withMessage("Destinations are required")
    .isArray()
    .withMessage("Destinations must be an array")
    .custom((value) => {
      return value.every((destination) => typeof destination === "string");
    })
    .withMessage("Destinations must be an array of strings"),
  body("budget.total")
    .trim()
    .notEmpty()
    .withMessage("Total budget is required")
    .isNumeric()
    .withMessage("Total budget must be a number"),
  body("budget.expenses")
    .optional()
    .isArray()
    .withMessage("Expenses must be an array"),
  body("budget.expenses.*.name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Expense name is required"),
  body("budget.expenses.*.amount")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Expense amount must be a number"),
  validate,
];
