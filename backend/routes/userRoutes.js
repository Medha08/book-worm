import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/').post(registerUser);

export default router;
