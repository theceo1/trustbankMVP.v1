import React from 'react';
import { Menu } from '@headlessui/react';

interface DropdownMenuContentProps {
  children: React.ReactNode;
  align?: 'start' | 'end';
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, align = 'start' }) => {
  const alignmentClass = align === 'end' ? 'origin-top-right right-0' : 'origin-top-left left-0';
  return (
    <Menu.Items className={`absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${alignmentClass}`}>
      {children}
    </Menu.Items>
  );
};

export default DropdownMenuContent;
