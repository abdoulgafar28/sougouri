import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { StatCard } from '../components/StatCard';
import { Badge } from '../components/Badge';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { paiements, cles, stats, loadPaiements } = useData();

  useEffect(() => {
    loadPaiements();
  }, [loadPaiements]);

  const enAttente = paiements.filter(p => p.statut === 'en_attente').slice(0, 5);

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard icon="📦" bgColor="bg-blue-50" value={stats.total} label="Total demandes" />
        <StatCard icon="🕐" bgColor="bg-warning-light" value={stats.en_attente} label="En attente" valueColor="text-warning" />
        <StatCard icon="✅" bgColor="bg-success-light" value={stats.approuve} label="Approuvées" valueColor="text-success" />
        <StatCard icon="❌" bgColor="bg-danger-light" value={stats.rejete} label="Rejetées" valueColor="text-danger" />
      </div>

      {/* Demandes en attente */}
      <div className="bg-white rounded-xl border border-border overflow-hidden mb-6">
        <div className="flex justify-between items-center px-4 py-3 border-b border-border">
          <h2 className="font-bold text-sm">🕐 Demandes en attente de validation</h2>
          <Link to="/paiements?statut=en_attente" className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-lg hover:bg-primary-dark">
            Voir toutes →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-muted text-[11px] font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">#</th>
                <th className="px-3 py-2 text-left">Date</th>
                <th className="px-3 py-2 text-left">Atelier</th>
                <th className="px-3 py-2 text-left">Téléphone</th>
                <th className="px-3 py-2 text-left">Opérateur</th>
                <th className="px-3 py-2 text-left">Montant</th>
                <th className="px-3 py-2 text-left">Méthode</th>
                <th className="px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {enAttente.length === 0 ? (
                <tr><td colSpan="8" className="text-center py-4 text-muted">Aucune demande en attente</td></tr>
              ) : (
                enAttente.map(p => (
                  <tr key={p.id} className="border-b border-border hover:bg-background/50">
                    <td className="px-3 py-2 font-semibold">#{p.id}</td>
                    <td className="px-3 py-2 text-muted text-xs">{p.date}</td>
                    <td className="px-3 py-2 font-medium">{p.atelier}</td>
                    <td className="px-3 py-2">{p.tel}</td>
                    <td className="px-3 py-2 font-semibold" style={{ color: p.op === 'Orange Money' ? '#FF7900' : p.op === 'Moov Money' ? '#0066CC' : '#00AA44' }}>
                      ● {p.op}
                    </td>
                    <td className="px-3 py-2 font-bold">{p.montant} FCFA</td>
                    <td className="px-3 py-2 text-xs">{p.method === 'capture' ? '📷 Capture' : '📝 Manuelle'}</td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1">
                        <button className="bg-success text-white text-xs px-2 py-1 rounded-lg hover:bg-success/80">✅ Traiter</button>
                        <button className="bg-white border border-border text-xs px-2 py-1 rounded-lg hover:bg-background">👁 Voir</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clés récentes */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="font-bold text-sm">🔑 Clés générées récemment</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-muted text-[11px] font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">Clé</th>
                <th className="px-3 py-2 text-left">Atelier</th>
                <th className="px-3 py-2 text-left">Plan</th>
                <th className="px-3 py-2 text-left">Expiration</th>
                <th className="px-3 py-2 text-left">Utilisée</th>
              </tr>
            </thead>
            <tbody>
              {cles.slice(0, 5).map(k => (
                <tr key={k.cle} className="border-b border-border hover:bg-background/50">
                  <td className="px-3 py-2 font-mono font-bold text-primary">{k.cle}</td>
                  <td className="px-3 py-2">{k.atelier}</td>
                  <td className="px-3 py-2"><span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${k.plan === 'Annuel' ? 'bg-success-light text-success' : 'bg-primary-light text-primary'}`}>{k.plan}</span></td>
                  <td className="px-3 py-2">{k.expire}</td>
                  <td className="px-3 py-2">{k.used ? <Badge statut="approuve" /> : <span className="bg-primary-light text-primary text-xs px-2 py-0.5 rounded-full">Non utilisée</span>}</td>
                </tr>
              ))}
              {cles.length === 0 && <tr><td colSpan="5" className="text-center py-4 text-muted">Aucune clé générée</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;