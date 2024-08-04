// File: src/pages/calculator.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/calculator.module.css';

const Calculator = () => {
    const [currency, setCurrency] = useState('BTC');
    const [action, setAction] = useState('BUY');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`);
                setExchangeRate(response.data[currency.toLowerCase()].usd);
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };
        fetchExchangeRate();
    }, [currency]);

    const handleCurrencyChange = (currency: string) => setCurrency(currency);
    const handleActionChange = (e: React.ChangeEvent<HTMLSelectElement>) => setAction(e.target.value);
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);

    const handleCalculate = () => {
        setResult(parseFloat(amount) / exchangeRate);
    };

    return (
        <div>
            <h1 className={styles.header}>Know how much you stand to gain</h1>
            <div className={styles.calculatorContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.cryptoLabel}>CRYPTO</div>
                    <div className={styles.cryptoOptions}>
                        <div className={styles.cryptoOption} onClick={() => handleCurrencyChange('BTC')}>
                            <img src="/path-to-btc-icon.png" alt="BTC" />
                            BTC
                        </div>
                        <div className={styles.cryptoOption} onClick={() => handleCurrencyChange('ETH')}>
                            <img src="/path-to-eth-icon.png" alt="ETH" />
                            ETH (ERC20)
                        </div>
                        <div className={styles.cryptoOption} onClick={() => handleCurrencyChange('USDT-ERC20')}>
                            <img src="/path-to-usdt-erc20-icon.png" alt="USDT-ERC20" />
                            USDT (ERC20)
                        </div>
                        <div className={styles.cryptoOption} onClick={() => handleCurrencyChange('USDT-TRC20')}>
                            <img src="/path-to-usdt-trc20-icon.png" alt="USDT-TRC20" />
                            USDT (TRC20)
                        </div>
                    </div>
                    <label htmlFor="action" className={styles.label}>Wallet Action:</label>
                    <select id="action" value={action} onChange={handleActionChange} className={styles.select}>
                        <option value="BUY">BUY</option>
                        <option value="SELL">SELL</option>
                    </select>
                    <label htmlFor="amount" className={styles.label}>Amount in USD:</label>
                    <input id="amount" type="text" value={amount} onChange={handleAmountChange} placeholder="Enter amount" className={styles.input} />
                    <button onClick={handleCalculate} className={styles.button}>Buy Now</button>
                    <div className={styles.result}>
                        <h2 className={styles.resultTitle}>{result.toFixed(5)}</h2>
                        <p className={styles.resultText}>{currency} {result.toFixed(5)}</p>
                        <p className={styles.resultText}>NOTE: This is an estimated rate. Actual rate may differ</p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <img src="/path-to-calculator-image.png" alt="Calculator" />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
