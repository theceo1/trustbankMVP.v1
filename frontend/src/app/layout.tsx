import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/deposit">Deposit</Link></li>
                        <li><Link href="/withdraw">Withdraw</Link></li>
                        <li>
                            <div>
                                <button>Company</button>
                                <div>
                                    <Link href="/vision">Vision</Link>
                                    <Link href="/mission">Mission</Link>
                                    <Link href="/about">About</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
