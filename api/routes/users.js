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
  userProfileUpdate,
  userProfileFeaturedSilder,
} from "../controllers/userController.js";
import multer from "multer";
import path from "path";

//  resolve
const __dirname = path.resolve();

/// init routers
const router = express.Router();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/api/public/slider"));
  },
});

const sliderFeatured = multer({ storage }).array("slider", 20);

// user auth router
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.put("/profile-update/:id", userProfileUpdate);
router.post("/freatured-slider/:id", sliderFeatured, userProfileFeaturedSilder);
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
