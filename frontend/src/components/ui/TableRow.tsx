import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

const TableRow: React.FC<TableRowProps> = ({ children, className = '' }) => (
  <tr className={`hover:bg-gray-100 ${className}`}>{children}</tr>
);

export default TableRow;
