import React from 'react';
import styles from '../../styles/Auth.module.css';

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  );
};

export default Header;
