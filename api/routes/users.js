import express from "express";
import {
  loggedInUser,
  login,
  register,
  activateAccount,
  activateAccountByCode,
  forgotPassword,
  passwordResetAction,
  resendActivation,
  findUserAccount,
  sendPasswordResetOtp,
  checkPasswordResetOtp,
  passwordReset,
} from "../controllers/userController.js";

/// init routers
const router = express.Router();

// user auth router
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.get("/activate/:token", activateAccount);
router.post("/code-activate/", activateAccountByCode);
router.post("/resend-activate/", resendActivation);
router.post("/forgot-password/", forgotPassword);
router.post("/forgot-password/:token", passwordResetAction);
router.post("/find-user-account", findUserAccount);
router.post("/send-password-reset-otp", sendPasswordResetOtp);
router.post("/check-password-reset-otp", checkPasswordResetOtp);
router.post("/user-password-reset", passwordReset);

// export default router
export default router;
