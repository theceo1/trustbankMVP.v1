import React from 'react';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default DropdownMenuItem;
