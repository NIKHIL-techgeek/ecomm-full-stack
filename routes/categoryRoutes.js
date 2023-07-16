import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controller/categoryController.js";
const router = express.Router();

// routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getALl category
router.get("/get-category", categoryController);

// single category
router.get("/single-category/:slug",singleCategoryController);

export default router;
