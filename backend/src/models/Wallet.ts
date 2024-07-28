import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    nairaBalance: { type: Number, default: 0 },
    cryptoBalances: {
        BTC: { type: Number, default: 0 },
        ETH: { type: Number, default: 0 },
        USDT: { type: Number, default: 0 },
        USDC: { type: Number, default: 0 }
    }
}, { timestamps: true });

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;
