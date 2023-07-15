import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createCategoryController } from "../controller/categoryController.js";
const router = express.Router();

// routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

export default router;
