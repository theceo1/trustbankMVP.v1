import React from 'react';

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className, ...props }) => (
  <div className={`absolute inset-0 flex items-center justify-center bg-gray-300 text-white ${className}`} {...props}>
    {children}
  </div>
);

export default AvatarFallback;
