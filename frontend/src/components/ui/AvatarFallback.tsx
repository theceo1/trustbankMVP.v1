// frontend/src/components/ui/AvatarFallback.tsx
import React from 'react';

interface AvatarFallbackProps {
  initials: string;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ initials }) => {
  return (
    <div className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200">
      {initials}
    </div>
  );
};

export default AvatarFallback;
