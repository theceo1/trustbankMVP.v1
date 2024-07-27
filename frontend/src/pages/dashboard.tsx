import React from 'react';

interface DashboardProps {
  balance: number;
  balanceInBTC: number;
  transactions: Transaction[];
  market: Market[];
}

interface Transaction {
  // Define transaction structure
}

interface Market {
  // Define market structure
}

const Dashboard: React.FC<DashboardProps> = ({ balance, balanceInBTC, transactions, market }) => {
  return (
    <div>
      {market.map((coin, index) => (
        <div key={index}>{/* Display coin data */}</div>
      ))}
      {transactions.map((transaction, index) => (
        <div key={index}>{/* Display transaction data */}</div>
      ))}
    </div>
  );
};

export default Dashboard;
