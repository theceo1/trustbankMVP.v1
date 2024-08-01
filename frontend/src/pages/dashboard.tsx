import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { cn } from '../utils/cn';
import { FaMoon, FaSyncAlt, FaFilter, FaArrowUp, FaArrowDown, FaCoins } from 'react-icons/fa';
import {
  Button,
  Card,
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../components/ui';
import ClientButton from '../components/ui/ClientButton';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold" prefetch={false}>
              trustBank
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Trade
              </Link>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Earn
              </Link>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Wallet
              </Link>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Markets
              </Link>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Vision
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ClientButton variant="primary" size="lg">
              Sign In
            </ClientButton>
            <ClientButton variant="outline" size="lg">
              Sign Up
            </ClientButton>
          </div>
        </header>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
          <div className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold">Dashboard</h2>
                <ClientButton variant="ghost" size="icon" className="ml-auto">
                  <FaMoon size={20} />
                </ClientButton>
              </div>
            </div>
            <div className="grid gap-4">
              <Card>
                <Card.Header>
                  <Card.Title className="text-sm">Account Balance</Card.Title>
                </Card.Header>
                <Card.Content className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-sm">$12,345.67</div>
                    <div className="text-gray-500 text-xs">≈ 1.23 BTC</div>
                  </div>
                  <ClientButton variant="outline" size="sm">
                    Deposit
                  </ClientButton>
                </Card.Content>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title className="text-sm">Recent Transactions</Card.Title>
                </Card.Header>
                <Card.Content>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="BTC" />
                          <AvatarFallback>BTC</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">Bitcoin</div>
                          <div className="text-gray-500 text-xs">Bought 0.05 BTC</div>
                        </div>
                      </div>
                      <div className="text-green-500 font-medium text-sm">+$1,250.00</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="ETH" />
                          <AvatarFallback>ETH</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">Ethereum</div>
                          <div className="text-gray-500 text-xs">Sold 0.25 ETH</div>
                        </div>
                      </div>
                      <div className="text-red-500 font-medium text-sm">-$750.00</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border">
                          <AvatarImage src="/placeholder-user.jpg" alt="USDC" />
                          <AvatarFallback>USDC</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">USDC</div>
                          <div className="text-gray-500 text-xs">Deposited $500</div>
                        </div>
                      </div>
                      <div className="text-green-500 font-medium text-sm">+$500.00</div>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Market Overview</h2>
              <div className="flex items-center gap-4">
                <ClientButton variant="outline" size="sm">
                  <FaSyncAlt size={20} />
                  Refresh
                </ClientButton>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ClientButton variant="outline" size="sm">
                      <FaFilter size={20} />
                      Filter
                    </ClientButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>24h</DropdownMenuItem>
                    <DropdownMenuItem>7d</DropdownMenuItem>
                    <DropdownMenuItem>30d</DropdownMenuItem>
                    <DropdownMenuItem>All time</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Custom...</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Table className="w-full text-sm">
              <TableHeader className="bg-gray-200 dark:bg-gray-900">
                <TableRow>
                  <TableHead className="p-2 text-gray-600 dark:text-gray-300">Asset</TableHead>
                  <TableHead className="p-2 text-gray-600 dark:text-gray-300">Price</TableHead>
                  <TableHead className="p-2 text-gray-600 dark:text-gray-300">Change</TableHead>
                  <TableHead className="p-2 text-gray-600 dark:text-gray-300">Market Cap</TableHead>
                  <TableHead className="p-2 text-gray-600 dark:text-gray-300">Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-white dark:bg-gray-800 border border-gray-200 p-2 block md:table-row">
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">Bitcoin</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$45,000</TableCell>
                  <TableCell className="p-2 text-green-500 block md:table-cell">+5.2%</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$850B</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$25B</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:bg-gray-800 border border-gray-200 p-2 block md:table-row">
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">Ethereum</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$3,000</TableCell>
                  <TableCell className="p-2 text-red-500 block md:table-cell">-2.8%</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$350B</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$20B</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:bg-gray-800 border border-gray-200 p-2 block md:table-row">
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">Cardano</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$1.30</TableCell>
                  <TableCell className="p-2 text-green-500 block md:table-cell">+8.1%</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$42B</TableCell>
                  <TableCell className="p-2 text-gray-800 dark:text-gray-200 block md:table-cell">$2B</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
