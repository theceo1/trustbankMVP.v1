import React, { ReactNode } from 'react';
import { Menu } from '@headlessui/react';

interface DropdownMenuItemProps {
  children: ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <div className={`${active ? 'bg-blue-500 text-white' : 'text-black'}`}>
          {children}
        </div>
      )}
    </Menu.Item>
  );
};
