import React from 'react';
import AvatarImage from '../components/ui/AvatarImage';
import Button from '../components/ui/Button';
import Table from '../components/ui/Table';
import TableHeader from '../components/ui/TableHeader';
import TableBody from '../components/ui/TableBody';
import TableRow from '../components/ui/TableRow';
import TableHead from '../components/ui/TableHead';
import TableCell from '../components/ui/TableCell';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Button onClick={() => console.log('Refresh')}>Refresh</Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>
          <p className="text-4xl font-bold mb-2">$12,345.67</p>
          <p className="text-gray-500">≈1.23 BTC</p>
          <Button className="mt-4" onClick={() => console.log('Deposit')}>Deposit</Button>
        </div>
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Coin</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center">
                    <AvatarImage src="/path/to/bitcoin.jpg" alt="Bitcoin" />
                    <span className="ml-2">Bitcoin</span>
                  </div>
                </TableCell>
                <TableCell>$56,789.00</TableCell>
                <TableCell className="text-green-500">+2.5%</TableCell>
                <TableCell>$1.2T</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center">
                    <AvatarImage src="/path/to/ethereum.jpg" alt="Ethereum" />
                    <span className="ml-2">Ethereum</span>
                  </div>
                </TableCell>
                <TableCell>$1,789.00</TableCell>
                <TableCell className="text-red-500">-1.2%</TableCell>
                <TableCell>$210B</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center">
                    <AvatarImage src="/path/to/usdc.jpg" alt="USDC" />
                    <span className="ml-2">USDC</span>
                  </div>
                </TableCell>
                <TableCell>$1.00</TableCell>
                <TableCell className="text-green-500">+0.1%</TableCell>
                <TableCell>$55B</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Trade</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Coin</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>USDC</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button onClick={() => console.log('Buy')}>Buy</Button>
              <Button onClick={() => console.log('Sell')} variant="secondary" className="ml-2">Sell</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
