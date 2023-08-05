// if routing in seperate file then we need router - like this one
import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
// router object
const router = express.Router();
// routing
// REGISTER || METHOD POST
// used to display on terminal -POST /api/v1/auth/login (code)
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// forgot password || POST
router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

//protected  user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// udpate profile
router.put('/profile',requireSignIn,updateProfileController);

export default router;
