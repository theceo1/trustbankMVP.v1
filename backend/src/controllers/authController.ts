import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/tokenUtil';
import { ObjectId } from 'mongodb';
import User from '../models/User';
import { Request, Response, NextFunction } from 'express';

const exampleFunction = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const objectId: ObjectId = new ObjectId();
    const idAsString: string = objectId.toHexString();

    const user = await User.findById(idAsString).lean();
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    next(error);
  }
});

export { exampleFunction };
