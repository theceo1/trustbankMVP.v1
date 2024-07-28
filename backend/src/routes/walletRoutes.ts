import express from 'express';
import { getWallet, updateWallet } from '../controllers/walletController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, getWallet);
router.put('/', authMiddleware, updateWallet);

export default authMiddleware;
