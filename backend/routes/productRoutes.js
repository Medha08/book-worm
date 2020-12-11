import express from 'express';
// import products from '../fixtures/products.js';
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../controllers/productControllers.js';
import { protect, isAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);

export default router;
