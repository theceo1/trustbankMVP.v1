import express from 'express';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/').get(protect, (req, res) => {
    res.send('Wallet route');
});

export default router;
