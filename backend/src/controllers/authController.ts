import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const registerUser = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Implementation
});

export const loginUser = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Implementation
});
