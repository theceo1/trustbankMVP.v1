import React from 'react';

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, className = '' }) => (
  <img className={`w-8 h-8 rounded-full ${className}`} src={src} alt={alt} />
);

export default AvatarImage;
