import express from 'express';
import { getWalletBalance } from '../controllers/walletController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/balance', protect, getWalletBalance);

export default router;
