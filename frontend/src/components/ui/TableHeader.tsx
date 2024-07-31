import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

export default TableHeader;
