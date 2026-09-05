import React from 'react';

import logo from '../../assets/machine_a_coudre.png';// Ajoutez votre logo



const Header = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-5 max-w-6xl mx-auto relative z-10">
      <div className="flex items-center gap-2.5 text-xl font-bold text-white">
        <img src={logo} alt="Logo Fani Couture" className="h-10 rounded-lg" />
        Fani Couture
      </div>
    </nav>
  );
};

export default Header;