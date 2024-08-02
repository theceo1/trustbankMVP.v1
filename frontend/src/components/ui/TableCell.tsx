import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className = '' }) => {
  return (
    <td className={`px-4 py-2 border-b border-gray-200 ${className}`}>
      {children}
    </td>
  );
};

export default TableCell;
