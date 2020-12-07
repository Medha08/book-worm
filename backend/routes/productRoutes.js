import express from 'express';
// import products from '../fixtures/products.js';
import {
  getProductById,
  getProducts,
} from '../controllers/productControllers.js';
const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;
