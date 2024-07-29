import express from "express";

const adminRouter = express.Router();

// Import controllers
import adminController from "../controller/AdminController.js";

// define site routes
adminRouter.get("/dashboard", adminController.getDashboardPage);
adminRouter.get("/manager-post", adminController.getManagerPostPage);
adminRouter.get("/add-user", adminController.getRegisterUserPage);
adminRouter.post("/add-user", adminController.registerUser);

// Export routes
export default adminRouter;
