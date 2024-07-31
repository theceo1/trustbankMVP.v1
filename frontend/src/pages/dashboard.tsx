import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { cn } from '../utils/cn';
import { FaMoon, FaSyncAlt, FaFilter, FaArrowUp, FaArrowDown, FaCoins } from 'react-icons/fa';
import {
  Button,
  Card,
  Avatar,
  AvatarImage,
  AvatarFallback,
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
            <Button variant="primary" size="large">
              Sign In
            </Button>
            <Button>Sign Up</Button>
          </div>
        </header>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
          <div className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold">Dashboard</h2>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <FaMoon size={20} />
                </Button>
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
                  <Button variant="outline" size="sm">
                    Deposit
                  </Button>
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
                        <Avatar className="w-8 h-8 border" src={''} alt={''}>
                          <AvatarImage src="/placeholder-user.jpg" />
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
                        <Avatar className="w-8 h-8 border" src={''} alt={''}>
                          <AvatarImage src="/placeholder-user.jpg" />
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
                        <Avatar className="w-8 h-8 border" src={''} alt={''}>
                          <AvatarImage src="/placeholder-user.jpg" />
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
                <Button variant="outline" size="sm">
                  <FaSyncAlt size={20} />
                  Refresh
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <FaFilter size={20} />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Gainers</DropdownMenuItem>
                    <DropdownMenuItem>Losers</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Volume</DropdownMenuItem>
                    <DropdownMenuItem>Market Cap</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Table className="min-w-full border-collapse block md:table">
              <TableHeader className="block md:table-header-group">
                <TableRow className="block md:table-row absolute -top-full md:relative md:top-auto -left-full md:left-auto md:table-row">
                  <TableHead className="bg-gray-200 p-2 text-gray-600 font-bold text-left block md:table-cell">Name</TableHead>
                  <TableHead className="bg-gray-200 p-2 text-gray-600 font-bold text-left block md:table-cell">Price</TableHead>
                  <TableHead className="bg-gray-200 p-2 text-gray-600 font-bold text-left block md:table-cell">Change</TableHead>
                  <TableHead className="bg-gray-200 p-2 text-gray-600 font-bold text-left block md:table-cell">Market Cap</TableHead>
                  <TableHead className="bg-gray-200 p-2 text-gray-600 font-bold text-left block md:table-cell">Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="block md:table-row-group">
                <TableRow className="bg-white border border-gray-200 p-2 block md:table-row">
                  <TableCell className="p-2 text-gray-800 block md:table-cell">Bitcoin</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$41,000</TableCell>
                  <TableCell className="p-2 text-green-500 block md:table-cell">+2.5%</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$770B</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$30B</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 border border-gray-200 p-2 block md:table-row">
                  <TableCell className="p-2 text-gray-800 block md:table-cell">Ethereum</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$2,500</TableCell>
                  <TableCell className="p-2 text-red-500 block md:table-cell">-1.3%</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$300B</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$20B</TableCell>
                </TableRow>
                <TableRow className="bg-white border border-gray-200 p-2 block md:table-row">
                  <TableCell className="p-2 text-gray-800 block md:table-cell">Cardano</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$1.20</TableCell>
                  <TableCell className="p-2 text-green-500 block md:table-cell">+4.0%</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$40B</TableCell>
                  <TableCell className="p-2 text-gray-800 block md:table-cell">$1B</TableCell>
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
