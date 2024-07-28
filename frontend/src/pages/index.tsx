import React from 'react';
import Wallet from '../components/Wallet'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Welcome to Trustbank</h1>
      <Wallet />
    </div>
  );
};

export default HomePage;
