import React from 'react';

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

const TableHead: React.FC<TableHeadProps> = ({ children, className }) => {
  return <th className={className}>{children}</th>;
};

export default TableHead;
