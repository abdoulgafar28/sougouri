import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Badge } from '../components/Badge';
import { useSearchParams } from 'react-router-dom';

const ListePaiements = () => {
  const { paiements, loadPaiements } = useData();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    statut: searchParams.get('statut') || 'tous',
    operateur: '',
    plan: '',
    search: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    loadPaiements(filters);
  }, [filters, loadPaiements]);

  const filtered = paiements.filter(p => {
    if (filters.statut !== 'tous' && p.statut !== filters.statut) return false;
    if (filters.operateur && p.op !== filters.operateur) return false;
    if (filters.plan && p.plan !== filters.plan) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      if (!p.atelier.toLowerCase().includes(q) && !p.tel.includes(q)) return false;
    }
    return true;
  });

  const total = filtered.length;
  const pages = Math.ceil(total / perPage);
  const slice = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <select
          value={filters.statut}
          onChange={e => handleFilterChange('statut', e.target.value)}
          className="px-3 py-2 border border-border rounded-lg text-sm bg-white focus:border-primary outline-none"
        >
          <option value="tous">Tous les statuts</option>
          <option value="en_attente">En attente</option>
          <option value="approuve">Approuvé</option>
          <option value="rejete">Rejeté</option>
        </select>
        <select
          value={filters.operateur}
          onChange={e => handleFilterChange('operateur', e.target.value)}
          className="px-3 py-2 border border-border rounded-lg text-sm bg-white focus:border-primary outline-none"
        >
          <option value="">Tous les opérateurs</option>
          <option>Orange Money</option>
          <option>Moov Money</option>
          <option>Telecel Money</option>
        </select>
        <select
          value={filters.plan}
          onChange={e => handleFilterChange('plan', e.target.value)}
          className="px-3 py-2 border border-border rounded-lg text-sm bg-white focus:border-primary outline-none"
        >
          <option value="">Tous les plans</option>
          <option value="mensuel">Mensuel (1 000 FCFA)</option>
          <option value="annuel">Annuel (10 000 FCFA)</option>
        </select>
        <input
          type="text"
          placeholder="🔍 Rechercher atelier / tél…"
          value={filters.search}
          onChange={e => handleFilterChange('search', e.target.value)}
          className="px-3 py-2 border border-border rounded-lg text-sm bg-white focus:border-primary outline-none min-w-[200px]"
        />
        <button className="ml-auto bg-white border border-border text-sm px-4 py-2 rounded-lg hover:bg-background">
          ⬇ Exporter CSV
        </button>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="flex justify-between items-center px-4 py-3 border-b border-border">
          <h2 className="font-bold text-sm">Toutes les demandes</h2>
          <span className="text-muted text-xs">{total} résultat{total > 1 ? 's' : ''}</span>
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
                <th className="px-3 py-2 text-left">Capture</th>
                <th className="px-3 py-2 text-left">Statut</th>
                <th className="px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {slice.map(p => (
                <tr key={p.id} className="border-b border-border hover:bg-background/50">
                  <td className="px-3 py-2 font-semibold">#{p.id}</td>
                  <td className="px-3 py-2 text-muted text-xs">{p.date}</td>
                  <td className="px-3 py-2 font-medium">{p.atelier}</td>
                  <td className="px-3 py-2">{p.tel}</td>
                  <td className="px-3 py-2 font-semibold" style={{ color: p.op === 'Orange Money' ? '#FF7900' : p.op === 'Moov Money' ? '#0066CC' : '#00AA44' }}>
                    ● {p.op}
                  </td>
                  <td className="px-3 py-2 font-bold">{p.montant} FCFA</td>
                  <td className="px-3 py-2">{p.method === 'capture' ? '📷' : '📝'}</td>
                  <td className="px-3 py-2"><Badge statut={p.statut} /></td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1">
                      <button className="bg-white border border-border text-xs px-2 py-1 rounded-lg hover:bg-background">👁</button>
                      {p.statut === 'en_attente' && (
                        <>
                          <button className="bg-success text-white text-xs px-2 py-1 rounded-lg hover:bg-success/80">✅</button>
                          <button className="bg-danger text-white text-xs px-2 py-1 rounded-lg hover:bg-danger/80">❌</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {slice.length === 0 && <tr><td colSpan="9" className="text-center py-4 text-muted">Aucune demande trouvée</td></tr>}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex justify-center gap-1 py-3">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border border-border rounded-lg text-sm ${currentPage === i + 1 ? 'bg-primary text-white border-primary' : 'bg-white hover:bg-background'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListePaiements;