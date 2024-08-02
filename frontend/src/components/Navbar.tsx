import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/trade" legacyBehavior>
        <a>Trade</a>
      </Link>
      <Link href="/earn" legacyBehavior>
        <a>Earn</a>
      </Link>
      <Link href="/wallet" legacyBehavior>
        <a>Wallet</a>
      </Link>
      <Link href="/markets" legacyBehavior>
        <a>Markets</a>
      </Link>
      <Link href="/vision" legacyBehavior>
        <a>Vision</a>
      </Link>
      <Link href="/signup" legacyBehavior>
        <a>Sign Up</a>
      </Link>
    </nav>
  );
};

export default Navbar;
