import React from 'react';
import Header from '../components/telechargement/header';
import Hero from '../components/telechargement/hero';
import Features from '../components/telechargement/features';
import Footer from '../components/telechargement/footer';

const DownloadAppPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#2c5364] via-[#203a43] to-[#0f2027] min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default DownloadAppPage;

