// trustbank/frontend/src/app/layout.tsx

import React from 'react';
import Component from '@/components/Component';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Dashboard Header</h1>
      </header>
      <Component />
      <main>{children}</main>
      <footer>
        <p>Dashboard Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
