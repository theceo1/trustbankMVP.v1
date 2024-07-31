import React from 'react';
import { Menu } from '@headlessui/react';

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, asChild }) => {
  return (
    <Menu.Button as={asChild ? React.Fragment : 'button'}>
      {children}
    </Menu.Button>
  );
};

export default DropdownMenuTrigger;
