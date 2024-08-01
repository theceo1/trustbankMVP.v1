import React from 'react';

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage: React.FC<AvatarImageProps> = (props) => (
  <img {...props} />
);

export default AvatarImage;
