// src/components/ui/avatar.tsx
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, children, className }) => {
  return (
    <div className={`avatar ${className}`}>
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  );
};

const AvatarFallback: React.FC = ({ children }) => <div>{children}</div>;
const AvatarImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => <img src={src} alt={alt} />;

export { Avatar, AvatarFallback, AvatarImage };
