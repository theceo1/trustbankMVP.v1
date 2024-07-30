import express from 'express';
import { makePayment } from '../controllers/paymentController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/pay', protect, makePayment);

export default router;
