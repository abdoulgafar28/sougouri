import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/60 py-10 px-5 text-center text-sm">
      <p>&copy; 2026 Fani Couture. Développé par <span className="text-indigo-400">Sougouri Solutions</span>.</p>
      <p className="mt-2">
        Contact :{' '}
        <a href="mailto:contact@sougouri.com" className="text-white hover:underline">
          contact@sougouri.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;