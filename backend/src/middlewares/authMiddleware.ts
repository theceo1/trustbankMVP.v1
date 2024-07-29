import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import expressAsyncHandler from 'express-async-handler';

export const protect = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Implementation
});
