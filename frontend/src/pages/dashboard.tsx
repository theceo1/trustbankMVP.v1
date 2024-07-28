// trustbank/frontend/src/pages/dashboard.tsx
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Avatar from '@/components/ui/avatar';
import DropdownMenu from '@/components/ui/dropdown-menu';
import Table from '@/components/ui/table';
import Label from '@/components/ui/label';
import Select from '@/components/ui/select';
import Input from '@/components/ui/input';
import { MoonIcon, RefreshCwIcon, FilterIcon, TrendingUpIcon, TrendingDownIcon, CoinsIcon } from 'react-icons/your-icon-library';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
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
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
        <div className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">Dashboard</h2>
              <Button variant="ghost" size="icon" className="ml-auto">
                <MoonIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$12,345.67</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">≈ 1.23 BTC</div>
                </div>
                <Button variant="outline" size="sm">
                  Deposit
                </Button>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>BTC</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">Bitcoin</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Bought 0.05 BTC</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-medium text-sm">+$1,250.00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>ETH</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">Ethereum</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Sold 0.25 ETH</div>
                      </div>
                    </div>
                    <div className="text-red-500 font-medium text-sm">-$750.00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>USDC</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">USDC</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Deposited $500</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-medium text-sm">+$500.00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Market Overview</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <TrendingUpIcon className="w-4 h-4 mr-2" />
                    Top Gainers
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrendingDownIcon className="w-4 h-4 mr-2" />
                    Top Losers
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CoinsIcon className="w-4 h-4 mr-2" />
                    All Coins
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Top Cryptocurrencies</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>24h %</TableHead>
                      <TableHead>Market Cap</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Bitcoin</TableCell>
                      <TableCell>$56,789.00</TableCell>
                      <TableCell className="text-green-500">+3.45%</TableCell>
                      <TableCell>$1.07T</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Ethereum</TableCell>
                      <TableCell>$3,456.00</TableCell>
                      <TableCell className="text-green-500">+5.67%</TableCell>
                      <TableCell>$400B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Cardano</TableCell>
                      <TableCell>$2.34</TableCell>
                      <TableCell className="text-red-500">-1.23%</TableCell>
                      <TableCell>$75B</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Top Movers</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>24h %</TableHead>
                      <TableHead>Volume</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Dogecoin</TableCell>
                      <TableCell>$0.56</TableCell>
                      <TableCell className="text-green-500">+12.34%</TableCell>
                      <TableCell>$8B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Shiba Inu</TableCell>
                      <TableCell>$0.000034</TableCell>
                      <TableCell className="text-green-500">+25.67%</TableCell>
                      <TableCell>$12B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Polygon</TableCell>
                      <TableCell>$1.23</TableCell>
                      <TableCell className="text-green-500">+7.89%</TableCell>
                      <TableCell>$15B</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
