import { Request, Response } from 'express';
import User from '../models/User';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';

const makePayment = async (req: AuthenticatedRequest, res: Response) => {
    const { amount } = req.body;

    if (!req.user) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    if (req.user.balance < amount) {
        return res.status(400).json({ message: 'Insufficient funds' });
    }

    req.user.balance -= amount;
    await req.user.save();

    res.status(200).json({ message: 'Payment successful', balance: req.user.balance });
};

export { makePayment };
