// src/components/ui/button.tsx
import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", children, onClick }) => {
  return (
    <button className={cn("px-4 py-2 bg-blue-500 text-white rounded", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
