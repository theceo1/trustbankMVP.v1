// File: src/pages/index.tsx
import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to TrustBank</h1>
            <nav>
                <ul>
                    <li><Link href="/calculator">Calculator</Link></li>
                    {/* Add other navigation links as needed */}
                </ul>
            </nav>
        </div>
    );
};

export default Home;
