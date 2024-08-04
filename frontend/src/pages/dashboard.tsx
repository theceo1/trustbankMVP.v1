import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="text-2xl font-bold" href="#" rel="ugc">
            trustBank
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <a className="hover:text-gray-400" href="#" rel="ugc">
              Trade
            </a>
            <a className="hover:text-gray-400" href="#" rel="ugc">
              Earn
            </a>
            <a className="hover:text-gray-400" href="#" rel="ugc">
              Wallet
            </a>
            <a className="hover:text-gray-400" href="#" rel="ugc">
              Markets
            </a>
            <a className="hover:text-gray-400" href="#" rel="ugc">
              Vision
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Sign In
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
        <div className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">Dashboard</h2>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Account Balance</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$12,345.67</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">≈ 1.23 BTC</div>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Deposit
                </button>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Recent Transactions</h3>
              </div>
              <div className="p-6">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                        <Image className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="user" width={32} height={32} />
                      </span>
                      <div>
                        <div className="font-medium text-sm">Bitcoin</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Bought 0.05 BTC</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-medium text-sm">+$1,250.00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                        <Image className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="user" width={32} height={32} />
                      </span>
                      <div>
                        <div className="font-medium text-sm">Ethereum</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Sold 0.25 ETH</div>
                      </div>
                    </div>
                    <div className="text-red-500 font-medium text-sm">-$750.00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                        <Image className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="user" width={32} height={32} />
                      </span>
                      <div>
                        <div className="font-medium text-sm">USDC</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Deposited $500</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-medium text-sm">+$500.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Market Overview</h2>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
                Refresh
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Bitcoin</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$41,356.70</div>
                  <div className="text-green-500 text-xs">+5.2%</div>
                </div>
                <Image className="h-10 w-10" src="/btc.png" alt="BTC" width={40} height={40} />
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Ethereum</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$2,954.50</div>
                  <div className="text-red-500 text-xs">-2.3%</div>
                </div>
                <Image className="h-10 w-10" src="/eth.png" alt="ETH" width={40} height={40} />
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Binance Coin</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$350.20</div>
                  <div className="text-green-500 text-xs">+3.8%</div>
                </div>
                <Image className="h-10 w-10" src="/bnb.png" alt="BNB" width={40} height={40} />
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Cardano</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$1.23</div>
                  <div className="text-green-500 text-xs">+4.5%</div>
                </div>
                <Image className="h-10 w-10" src="/ada.png" alt="ADA" width={40} height={40} />
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Ripple</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$0.76</div>
                  <div className="text-red-500 text-xs">-1.8%</div>
                </div>
                <Image className="h-10 w-10" src="/xrp.png" alt="XRP" width={40} height={40} />
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:text-gray-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap font-semibold tracking-tight text-sm">Solana</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$150.35</div>
                  <div className="text-green-500 text-xs">+6.1%</div>
                </div>
                <Image className="h-10 w-10" src="/sol.png" alt="SOL" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 text-center">
        <p>&copy; 2024 trustBank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
