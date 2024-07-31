import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

export default TableRow;
