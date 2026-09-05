import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Vue d\'ensemble',
  '/paiements': 'Demandes de paiement',
  '/cles': 'Clés d\'activation',
};

const Layout = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Sira Couture';
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-56 flex-1 flex flex-col">
        <TopBar title={title} />
        <div className="p-5 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;