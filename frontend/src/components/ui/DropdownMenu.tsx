import React, { ReactNode } from 'react';
import { Menu } from '@headlessui/react';

interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return <Menu>{children}</Menu>;
};
