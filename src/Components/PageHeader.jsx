import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">{title}</h1>
      {subtitle && (
        <p className="text-gray-500 text-sm">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;