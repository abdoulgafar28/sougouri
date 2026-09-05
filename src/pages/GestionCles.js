import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Badge } from '../components/Badge';

const GestionCles = () => {
  const { cles, loadCles } = useData();

  useEffect(() => {
    loadCles();
  }, [loadCles]);

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="font-bold text-sm">🔑 Clés d'activation</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-muted text-[11px] font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-3 py-2 text-left">Clé</th>
              <th className="px-3 py-2 text-left">Atelier</th>
              <th className="px-3 py-2 text-left">Téléphone</th>
              <th className="px-3 py-2 text-left">Plan</th>
              <th className="px-3 py-2 text-left">Créée le</th>
              <th className="px-3 py-2 text-left">Expire le</th>
              <th className="px-3 py-2 text-left">État</th>
            </tr>
          </thead>
          <tbody>
            {cles.map(k => (
              <tr key={k.cle} className="border-b border-border hover:bg-background/50">
                <td className="px-3 py-2 font-mono font-bold text-primary tracking-wider">{k.cle}</td>
                <td className="px-3 py-2">{k.atelier}</td>
                <td className="px-3 py-2">{k.tel}</td>
                <td className="px-3 py-2">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${k.plan === 'Annuel' ? 'bg-success-light text-success' : 'bg-primary-light text-primary'}`}>
                    {k.plan}
                  </span>
                </td>
                <td className="px-3 py-2">{k.created}</td>
                <td className="px-3 py-2">{k.expire}</td>
                <td className="px-3 py-2">
                  {k.used ? (
                    <Badge statut="approuve" />
                  ) : (
                    <span className="bg-primary-light text-primary text-xs px-2 py-0.5 rounded-full">
                      Disponible
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {cles.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-muted">
                  Aucune clé générée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionCles;