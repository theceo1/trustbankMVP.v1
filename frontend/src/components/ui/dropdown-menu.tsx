import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import  cn  from '../../utils/cn';

interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

 const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, className, active }) => {
  return (
    <div className="relative inline-block text-left">
      {children}
    </div>
  );
};

export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Menu.Button as={React.Fragment}>{children}</Menu.Button>;
};

export const DropdownMenuContent: React.FC<{ children: React.ReactNode, align?: 'start' | 'end' }> = ({ children, align = 'start' }) => {
  return (
    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className={`absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${align === 'end' ? 'right-0' : 'left-0'}`}>
        {children}
      </Menu.Items>
    </Transition>
  );
};

const DropdownMenuItem: React.FC<DropdownMenuProps> = ({ children, className, active }: DropdownMenuProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-gray-100' : ''
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};

export const DropdownMenuSeparator = () => {
  return <div className="border-t border-gray-100 my-1"></div>;
};

export default DropdownMenu;
