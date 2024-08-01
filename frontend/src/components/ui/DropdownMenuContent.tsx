import React, { ReactNode } from 'react';
import { Menu } from '@headlessui/react';

interface DropdownMenuContentProps {
  children: ReactNode;
  align?: 'start' | 'end'; // If align prop is optional
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, align }) => {
  const alignmentClass = align === 'end' ? 'right-0' : 'left-0';

  return <Menu.Items className={`absolute mt-2 ${alignmentClass}`}>{children}</Menu.Items>;
};
