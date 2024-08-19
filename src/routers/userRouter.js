import express from "express";
import { ensureAuthenticated } from "../middleware/auth.js";

const userRouter = express.Router();

// Import controllers
import userController from "../controller/UserController.js";

// define user routes
userRouter.get("/login", userController.getLoginPage); //get login page
userRouter.post("/login", userController.doLogin); //get login page
userRouter.post("/logout", userController.doLogout); // get logout page
userRouter.get("/profile",ensureAuthenticated, userController.getProfilePage); // get profile page
userRouter.get("/register", userController.getRegisterPage); // get register page

// Export routes
export default userRouter;
