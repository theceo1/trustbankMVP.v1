import React, { ReactNode } from 'react';
import { Menu } from '@headlessui/react';

interface DropdownMenuTriggerProps {
  children: ReactNode;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => {
  return <Menu.Button>{children}</Menu.Button>;
};
