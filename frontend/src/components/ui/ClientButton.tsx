import React from 'react';

interface ClientButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ClientButton: React.FC<ClientButtonProps> = ({ variant, size, className, children, onClick }) => {
  const baseStyle = 'px-4 py-2 rounded-md';
  const variantStyle = variant === 'primary' ? 'bg-blue-500 text-white' : variant === 'secondary' ? 'bg-gray-500 text-white' : variant === 'outline' ? 'border border-gray-300 text-gray-800' : 'text-gray-800';
  const sizeStyle = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'p-2';

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ClientButton;
