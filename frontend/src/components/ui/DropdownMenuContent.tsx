// frontend/src/components/ui/DropdownMenuContent.tsx
import React from 'react';

interface DropdownMenuContentProps {
  children: React.ReactNode;
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children }) => {
  return (
    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      {children}
    </div>
  );
};

export default DropdownMenuContent;
