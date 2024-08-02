import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to TrustBank</h1>
      </div>
    </div>
  );
};

export default Home;
