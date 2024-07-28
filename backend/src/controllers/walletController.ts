import { Request, Response } from 'express';
import Wallet from '../models/Wallet';

declare global {
    namespace Express {
      interface Request {
        user?: any;
      }
    }
  }
export const someControllerFunction = (req: Request, res: Response) => {
  const user = (req as any).user; 
};


export const getWallet = async (req: Request, res: Response) => {
    try {
        const wallet = await Wallet.findOne({ userId: req.user._id });
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallet data' });
    }
};

export const updateWallet = async (req: Request, res: Response) => {
    try {
        const { nairaBalance, cryptoBalances } = req.body;
        const wallet = await Wallet.findOneAndUpdate(
            { userId: req.user._id },
            { nairaBalance, cryptoBalances },
            { new: true }
        );
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error updating wallet data' });
    }
};
