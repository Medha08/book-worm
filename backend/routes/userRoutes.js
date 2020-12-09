import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserByID,
  editUserProfile,
} from '../controllers/userControllers.js';
import { protect, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/').post(registerUser).get(protect, isAdmin, getAllUsers);
router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserByID)
  .put(protect, isAdmin, editUserProfile);

export default router;
