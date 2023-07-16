import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createProductController, getProductController, getSingleProductController, productPhotoController } from "../controller/productController.js";
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

// get photo
router.get("/product-photo/:pid",productPhotoController);


export default router;
