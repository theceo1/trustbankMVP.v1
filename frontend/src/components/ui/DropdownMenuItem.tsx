// frontend/src/components/ui/DropdownMenuItem.tsx
import React from 'react';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {children}
    </button>
  );
};

export default DropdownMenuItem;
