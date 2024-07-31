import React from 'react';
import { Menu } from '@headlessui/react';

const DropdownMenuItem: React.FC = ({ children }) => {
  return (
    <Menu.Item>
      {({ active }: { active: boolean }) => (
        <button className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700`}>
          {children}
        </button>
      )}
    </Menu.Item>
  );
};

export default DropdownMenuItem;
