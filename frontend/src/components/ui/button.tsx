//frontend/src/components/ui/button.tsx
import React from 'react';
import  cn  from '../../utils/cn';

const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={cn('btn', className)}>
      {children}
    </button>
  );
};

export default Button;
