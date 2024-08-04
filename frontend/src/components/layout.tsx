// File: src/components/app/layout.tsx (or wherever your navigation is)
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const Layout: React.FC = ({ children }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <div className={styles.dropdown} onClick={toggleDropdown}>
                        About
                        {dropdownOpen && (
                            <div className={styles.dropdownContent}>
                                <Link href="/vision">Vision</Link>
                                <Link href="/mission">Mission</Link>
                                <Link href="/about">About Us</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
