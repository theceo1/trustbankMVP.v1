import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

const Table: React.FC<TableProps> = ({ children, className = '' }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>{children}</table>
);

export default Table;
