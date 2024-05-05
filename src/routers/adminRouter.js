import express from 'express';

const adminRouter = express.Router();

// Import controllers
import adminController from '../controller/AdminController.js';

// define site routes
adminRouter.get('/dashboard', adminController.getDashboardPage);
adminRouter.get('/manager-post', adminController.getManagerPostPage);

// Export routes
export default adminRouter;
