// frontend/src/components/ui/DropdownMenuTrigger.tsx
import React from 'react';

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="focus:outline-none">
      {children}
    </button>
  );
};

export default DropdownMenuTrigger;
