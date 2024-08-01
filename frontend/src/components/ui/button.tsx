import React from 'react';
import styles from '../../styles/Auth.module.css';
type ButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
