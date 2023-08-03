import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controller/productController.js";
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

//update route
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get product
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delte product
router.delete("/product/pid", deteProductController);

// filter product
router.post('/product-filters',productFiltersController);

// product count
router.get('/product-count',productCountController);

// product per page
router.get('/product-list/:page',productListController);

// search product
router.get('/search/:keyword',searchProductController);

// Similar Products
router.get('/related-product/:pid/:c:id',relatedProductController);

// category wise product
router.get('/product-category/:slug',productCategoryController);

export default router;
