// src/components/ui/card.tsx
import React from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardProps>;
  Title: React.FC<CardProps>;
  Content: React.FC<CardProps>;
} = ({ className = "", children }) => {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  );
};

Card.Header = ({ className = "", children }) => {
  return (
    <div className={cn("flex items-center justify-between space-y-2 border-b p-6", className)}>
      {children}
    </div>
  );
};

Card.Title = ({ className = "", children }) => {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
};

Card.Content = ({ className = "", children }) => {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
};

export { Card };
