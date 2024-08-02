import React from 'react';

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

const TableBody: React.FC<TableBodyProps> = ({ children, className = '' }) => (
  <tbody className={`bg-white divide-y divide-gray-200 ${className}`}>{children}</tbody>
);

export default TableBody;
