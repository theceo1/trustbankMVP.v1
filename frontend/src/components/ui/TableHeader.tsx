import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, className = '' }) => (
  <thead className={`bg-gray-50 ${className}`}>{children}</thead>
);

export default TableHeader;
