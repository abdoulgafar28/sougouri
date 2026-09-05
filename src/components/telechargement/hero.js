import React from 'react';
import appScreenshot from '../../assets/capture_fani_couture.png'; 

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto mt-10 px-5 relative z-10">
      <div className="flex-1 min-w-[300px] pr-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Gérez votre atelier avec <br />
          <span className="text-indigo-400">Fani Couture</span>
        </h1>
        <p className="text-base md:text-lg text-white/90 font-light mt-5 mb-8">
          L'application qui simplifie la gestion de votre atelier de couture.
          Clients, habits, factures,et  modèles, tout est centralisé.
        </p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1cUUvyQhz9zC4yNRnhVu3N855pJpHwrj5/view?usp=drive_link"
            className="inline-flex items-center bg-indigo-500 text-white px-6 py-3.5 rounded-full font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40"
          >
            <i className="fab fa-android mr-2.5"></i>
            Télécharger l'APK
          </a>
          <a
            href="#features"
            className="inline-flex items-center bg-transparent border-2 border-white/30 text-white px-6 py-3.5 rounded-full font-semibold transition-colors hover:bg-white/10"
          >
            <i className="fas fa-info-circle mr-2.5"></i>
            En savoir plus
          </a>
        </div>

        <div className="mt-4">
          <small className="text-white/70">Version 1.0.0 • Android • Bientôt sur iOS</small>
        </div>
      </div>

      <div className="flex-1 min-w-[300px] flex justify-center mt-10 md:mt-0">
        <div className="w-60 h-[480px] md:w-72 md:h-[560px] bg-black rounded-[40px] border-8 border-gray-700 relative overflow-hidden shadow-2xl">
          <img
            src={appScreenshot}
            alt="Capture d'écran Fani Couture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
