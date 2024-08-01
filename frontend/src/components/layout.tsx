import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="your-header-class">Header</header>
      <main>{children}</main>
      <footer className="your-footer-class">Footer</footer>
    </div>
  );
};

export default Layout;
