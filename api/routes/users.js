import express from "express";
import { loggedInUser, login, register } from "../controllers/userController.js";



/// init routers
const router = express.Router();




// user auth router
router.post('/login', login);
router.post('/register', register);
router.get('/me', loggedInUser);


// export default router
export default router;