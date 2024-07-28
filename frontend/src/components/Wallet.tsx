import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wallet: React.FC = () => {
    const [wallet, setWallet] = useState<any>(null);

    useEffect(() => {
        fetchWallet();
    }, []);

    const fetchWallet = async () => {
        try {
            const response = await axios.get('/api/wallet');
            setWallet(response.data);
        } catch (error) {
            console.error('Error fetching wallet data', error);
        }
    };

    const updateWallet = async (updatedWallet: any) => {
        try {
            const response = await axios.put('/api/wallet', updatedWallet);
            setWallet(response.data);
        } catch (error) {
            console.error('Error updating wallet data', error);
        }
    };

    return (
        <div>
            <h1>Wallet</h1>
            {wallet && (
                <div>
                    <p>Naira Balance: {wallet.nairaBalance}</p>
                    <p>BTC: {wallet.cryptoBalances.BTC}</p>
                    <p>ETH: {wallet.cryptoBalances.ETH}</p>
                    <p>USDT: {wallet.cryptoBalances.USDT}</p>
                    <p>USDC: {wallet.cryptoBalances.USDC}</p>
                </div>
            )}
        </div>
    );
};

export default Wallet;
