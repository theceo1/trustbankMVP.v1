import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/components/Providers";
import "@/styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>TrustBank Dashboard</title>
        <meta name="description" content="TrustBank Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Toaster position="bottom-right" />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
