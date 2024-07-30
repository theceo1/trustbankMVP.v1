// src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/authRoutes';
import paymentRoutes from './routes/paymentRoutes';
import walletRoutes from './routes/walletRoutes';

dotenv.config(); // Ensure this is at the top

console.log(`MONGO_URI: ${process.env.MONGO_URI}`); // Debugging line to check MONGO_URI

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/wallet', walletRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
