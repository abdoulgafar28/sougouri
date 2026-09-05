import React from 'react';

export const StatCard = ({ icon, bgColor, value, label, valueColor }) => (
  <div className="bg-white rounded-xl p-4 border border-border flex items-center gap-3">
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl ${bgColor}`}>
      {icon}
    </div>
    <div>
      <div className={`text-2xl font-extrabold leading-none ${valueColor || ''}`}>{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  </div>
);