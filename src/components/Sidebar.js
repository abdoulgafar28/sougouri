import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: '📊', label: 'Vue d\'ensemble' },
    { divider: true, label: 'Paiements' },
    { path: '/paiements', icon: '📋', label: 'Toutes les demandes' },
    { path: '/paiements?statut=en_attente', icon: '🕐', label: 'En attente' },
    { path: '/paiements?statut=approuve', icon: '✅', label: 'Approuvées' },
    { path: '/paiements?statut=rejete', icon: '❌', label: 'Rejetées' },
    { divider: true, label: 'Licences' },
    { path: '/cles', icon: '🔑', label: 'Clés d\'activation' },
  ];

  return (
    <aside className="w-56 bg-indigo-900 text-white h-screen fixed flex flex-col overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xl">✂️</span>
          <h1 className="text-sm font-extrabold tracking-wide">Sira Couture</h1>
        </div>
        <div className="text-[11px] text-white/45 ml-8">Gestion des licences</div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map((item, idx) => {
          if (item.divider) {
            return (
              <div key={idx} className="text-[10px] uppercase tracking-wider text-white/35 px-4 pt-4 pb-1">
                {item.label}
              </div>
            );
          }
          return (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors ${
                  isActive ? 'bg-white/10 text-white border-l-2 border-white' : ''
                }`
              }
            >
              <span className="w-4 text-center text-sm">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <a href="/admin" className="text-white/50 text-xs hover:text-white">⬅ Django Admin</a>
      </div>
    </aside>
  );
};

export default Sidebar;