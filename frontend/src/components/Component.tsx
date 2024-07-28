// trustbank/frontend/src/components/Component.tsx

import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Component: React.FC = () => {
  const notify = () => toast('This is a test notification!');

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <Toaster />
    </div>
  );
};

export default Component;
