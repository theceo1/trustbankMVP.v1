/// <reference path="../types/flutterwave-node-v3.d.ts" />

import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Flutterwave from 'flutterwave-node-v3';

const flw = new Flutterwave('PUBLIC_KEY', 'SECRET_KEY');

export const makePayment = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Implementation
  try {
    const paymentDetails = {
      // Payment details here
    };
    const response = await flw.makePayment(paymentDetails);
    res.json(response);
  } catch (error) {
    next(error);
  }
});
