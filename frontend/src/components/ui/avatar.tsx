import React from 'react';

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ className, children }) => {
  return <div className={`relative inline-block ${className}`}>{children}</div>;
};

export const AvatarImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img className="rounded-full" {...props} />;
};

export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-full bg-gray-300 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Avatar;
