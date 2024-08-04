import express from 'express';
import { protect, verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/').get(protect, (req, res) => {
    res.send('Payment route');
});

router.route('/verify').get(verifyToken, (req, res) => {
    res.send('Verify token route');
});

export default router;
