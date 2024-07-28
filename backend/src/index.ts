import express from 'express';
import dotenv from 'dotenv';
import walletRoutes from './routes/walletRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use('/api/wallet', walletRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
