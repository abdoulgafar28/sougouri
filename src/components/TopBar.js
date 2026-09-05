import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = ({ title }) => {
  return (
    <header className="h-14 bg-white border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
      <span className="font-bold text-base text-text">{title}</span>
      <div className="flex items-center gap-4">
        {/* Nouveau bouton vers la page de téléchargement */}
        <Link 
          to="/download" 
          className="bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-indigo-600 transition-colors"
        >
          📱 Télécharger
        </Link>
        <div className="flex items-center gap-2 text-muted text-sm">
          <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-sm">
            A
          </div>
          Admin
        </div>
      </div>
    </header>
  );
};

export default TopBar;