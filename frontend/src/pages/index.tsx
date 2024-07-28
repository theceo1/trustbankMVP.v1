// trustbank/frontend/src/pages/index.tsx

import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
