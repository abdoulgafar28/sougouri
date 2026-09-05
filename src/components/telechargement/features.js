import React from 'react';

const features = [
  {
    icon: 'fa-users',
    title: 'Gestion des clients',
    description: 'Suivez tous vos clients, leurs coordonnées et leur historique de commandes.'
  },
  {
    icon: 'fa-tshirt',
    title: 'Suivi des habits',
    description: 'Gérez chaque habit en cours de fabrication ou à récupérer.'
  },
  {
    icon: 'fa-crop-alt',
    title: 'Modèles & styles',
    description: 'Créez et gérez vos modèles pour gagner du temps.'
  },
  {
    icon: 'fa-file-invoice',
    title: 'Facturation',
    description: 'Générez des factures professionnelles en quelques clics.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Statistiques',
    description: 'Visualisez l\'activité de votre atelier et suivez votre progression.'
  },
  {
    icon: 'fa-key',
    title: 'Licence sécurisée',
    description: 'Activez votre licence et protégez vos données.'
  }
];

const Features = () => {
  return (
    <section className="py-20 px-5 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
        Pourquoi utiliser Fani Couture ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2.5 transition-transform duration-300"
          >
            <div className="w-[70px] h-[70px] bg-indigo-50 rounded-full flex items-center justify-center text-3xl text-indigo-500 mx-auto mb-5">
              <i className={`fas ${feature.icon}`}></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2.5">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;