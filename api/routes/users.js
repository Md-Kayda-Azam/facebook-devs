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
  userProfilePhotoUpdate,
  userCoverPhotoUpdate,
  getAllUsers,
  sendFriendRequest,
  sendFriendRequestCancel,
  sendFriendRequestConfirm,
  sendFriendRequestDelete,
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
    if (file.fieldname === "slider") {
      cb(null, path.join(__dirname, "/api/public/slider"));
    } else if (file.fieldname === "profile") {
      cb(null, path.join(__dirname, "/api/public/profile"));
    } else if (file.fieldname === "cover") {
      cb(null, path.join(__dirname, "/api/public/cover"));
    }
  },
});

const sliderFeatured = multer({ storage }).array("slider", 20);
const profilePhoto = multer({ storage }).single("profile");
const coverPhoto = multer({ storage }).single("cover");

// user auth router
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.get("/users/:id", getAllUsers);

router.get("/add-friend/:receiver/:sender", sendFriendRequest);
router.get("/add-friend-cancel/:receiver/:sender", sendFriendRequestCancel);
router.get("/add-friend-confirm/:receiver/:sender", sendFriendRequestConfirm);
router.get(
  "/add-friend-request-delete/:receiver/:sender",
  sendFriendRequestDelete
);

router.put("/profile-update/:id", userProfileUpdate);
router.put("/profile-photo-update/:id", profilePhoto, userProfilePhotoUpdate);
router.put("/cover-photo-update/:id", coverPhoto, userCoverPhotoUpdate);
router.post("/featured-slider/:id", sliderFeatured, userProfileFeaturedSilder);
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
