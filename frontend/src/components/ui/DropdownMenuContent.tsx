import React from 'react';

interface DropdownMenuContentProps {
  children: React.ReactNode;
  align?: string;
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, align }) => {
  return <div>{children}</div>;
};

export default DropdownMenuContent;
