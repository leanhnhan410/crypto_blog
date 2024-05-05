import express from 'express';

const userRouter = express.Router();

// Import controllers
import userController from '../controller/UserController.js';

// define user routes
userRouter.get('/user-login', userController.getLoginPage); //get login page
userRouter.get('/user-logout', userController.getLogoutPage); // get logout page
userRouter.get('/user-profile', userController.getProfilePage); // get profile page
userRouter.get('/user-register', userController.getRegisterPage); // get register page 

// Export routes
export default userRouter;
