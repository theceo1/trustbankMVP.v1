import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/tokenUtil';
import { ObjectId } from 'mongodb';
import User from '../models/User';

const exampleFunction = expressAsyncHandler(async (req, res) => {
  const objectId: ObjectId = new ObjectId();
  const idAsString: string = objectId.toHexString();
  
  const user = await User.findById(idAsString).lean();
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const token = generateToken(user._id);
  res.json({ token });
});
