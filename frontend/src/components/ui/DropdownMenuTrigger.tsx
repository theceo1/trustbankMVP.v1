import React from 'react';

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, asChild }) => {
  return <div>{children}</div>;
};

export default DropdownMenuTrigger;
