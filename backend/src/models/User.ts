import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
    id: string;
    email: string;
    name: string;
    password: string; // Include other fields as necessary
    balance: number; // Add the balance property
}

const userSchema = new mongoose.Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 }, // Initialize balance
    // Add other fields as necessary
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
export { IUser };
