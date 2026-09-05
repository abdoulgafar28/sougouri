import React from 'react';

const statusMap = {
  en_attente: { label: 'En attente', className: 'bg-warning-light text-warning' },
  approuve: { label: 'Approuvé', className: 'bg-success-light text-success' },
  rejete: { label: 'Rejeté', className: 'bg-danger-light text-danger' },
};

export const Badge = ({ statut, className = '' }) => {
  const s = statusMap[statut] || { label: statut, className: 'bg-gray-200' };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${s.className} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
      {s.label}
    </span>
  );
};