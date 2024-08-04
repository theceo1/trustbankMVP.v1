import React, { useState, useEffect } from 'react';
import styles from '../styles/calculator.module.css';

const CryptoCalculator: React.FC = () => {
    const [cryptoAmount, setCryptoAmount] = useState(0);
    const [fiatAmount, setFiatAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [currency, setCurrency] = useState('BTC');
    const [walletAction, setWalletAction] = useState('BUY');

    useEffect(() => {
        // Fetch real-time exchange rate from an API
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency.toLowerCase()}&vs_currencies=usd`)
            .then(response => response.json())
            .then(data => {
                setExchangeRate(data[currency.toLowerCase()].usd);
            });
    }, [currency]);

    const handleCryptoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(event.target.value);
        setCryptoAmount(amount);
        setFiatAmount(amount * exchangeRate);
    };

    const handleFiatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(event.target.value);
        setFiatAmount(amount);
        setCryptoAmount(amount / exchangeRate);
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.currencySelector}>
                <label>Select Currency:</label>
                <button onClick={() => setCurrency('BTC')}>BTC</button>
                <button onClick={() => setCurrency('ETH')}>ETH (ERC20)</button>
                <button onClick={() => setCurrency('USDT')}>USDT (ERC20)</button>
                <button onClick={() => setCurrency('USDT')}>USDT (TRC20)</button>
            </div>
            <div className={styles.walletAction}>
                <label>Wallet Action:</label>
                <select value={walletAction} onChange={e => setWalletAction(e.target.value)}>
                    <option value="BUY">BUY</option>
                    <option value="SELL">SELL</option>
                </select>
            </div>
            <div className={styles.amountInput}>
                <label>Amount in USD:</label>
                <input
                    type="number"
                    value={fiatAmount}
                    onChange={handleFiatChange}
                    placeholder="Enter amount"
                />
                <p>$1 = NGN1640</p>
            </div>
            <div className={styles.result}>
                <p>{fiatAmount} USD = {cryptoAmount} {currency}</p>
                <p>NOTE: This is an estimated rate. Actual rate may differ</p>
            </div>
            <button className={styles.buyButton}>Buy Now</button>
        </div>
    );
};

export default CryptoCalculator;
