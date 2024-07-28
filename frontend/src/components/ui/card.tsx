// src/components/ui/card.tsx
import React, { FC } from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

const Card: FC<CardProps> & { Header: FC; Content: FC; Title: FC } = ({ children }) => (
    <div className="card">{children}</div>
);

Card.Header = ({ children }) => <div className="card-header">{children}</div>;
Card.Content = ({ children }) => <div className="card-content">{children}</div>;
Card.Title = ({ children }) => <div className="card-title">{children}</div>;

export default Card;
