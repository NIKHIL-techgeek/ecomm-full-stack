import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createProductController, getProductController, getSingleProductController } from "../controller/productController.js";
import formidable from "express-formidable";
const router = express.Router();

// routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get product
router.get("/get-product",getProductController);

// single product
router.get("/get-product/:slug",getSingleProductController);

export default router;
