// File: src/pages/vision.tsx
import React from 'react';
import styles from '../styles/vision.module.css';

const Vision = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Our Vision</h1>
            <p className={styles.text}>
                At TrustBank, our vision is to revolutionize the cryptocurrency exchange industry by providing a secure, user-friendly platform that empowers individuals to take control of their financial future. We aim to make cryptocurrency trading accessible to everyone, regardless of their technical expertise or financial background.
            </p>
        </div>
    );
};

export default Vision;
