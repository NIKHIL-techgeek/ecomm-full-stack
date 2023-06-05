// if routing in seperate file then we need router - like this one
import express from "express";
import {
  registerController,
  loginController,
} from "../controller/authController.js";

// router object
const router = express.Router();
// routing
// REGISTER || METHOD POST
// used to display on terminal -POST /api/v1/auth/login (code)
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

export default router;
