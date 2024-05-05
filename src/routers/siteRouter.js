import express from 'express';

const siteRouter = express.Router();

// Import controllers
import siteController from '../controller/SiteController.js';

// define site routes
siteRouter.get('/', siteController.getIndexPage); // get index page
siteRouter.get('/categories', siteController.getCategoryPage); // get categories
siteRouter.get('/categories:id', siteController.getNewsPage); // get news
siteRouter.get('/search', siteController.getSearchPage); // get search

// Export routes
export default siteRouter;
