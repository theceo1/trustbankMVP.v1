import React from 'react';

interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt || 'Avatar'} className={className} />;
};

export default AvatarImage;
