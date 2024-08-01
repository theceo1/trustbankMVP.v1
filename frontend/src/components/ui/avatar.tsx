import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, ...props }) => (
  <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${className}`} {...props} />
);

export default Avatar;
