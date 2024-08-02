import React from 'react';

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

const TableHead: React.FC<TableHeadProps> = ({ children, className = '' }) => (
  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

export default TableHead;
