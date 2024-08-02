import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', variant = 'primary' }) => {
  const baseClass = 'px-4 py-2 rounded';
  const variantClass = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
