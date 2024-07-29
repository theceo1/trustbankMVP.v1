import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Flutterwave from 'flutterwave-node-v3';

const flw = new Flutterwave('PUBLIC_KEY', 'SECRET_KEY');

export const makePayment = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Implementation
});
