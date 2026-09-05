import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getAdminPaiements, getAdminCles } from '../api/client';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [paiements, setPaiements] = useState([]);
  const [cles, setCles] = useState([]);
  const [stats, setStats] = useState({ total: 0, en_attente: 0, approuve: 0, rejete: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les paiements (avec filtres optionnels)
  const loadPaiements = useCallback(async (filters = {}) => {
    setLoading(true);
    try {
      const res = await getAdminPaiements(filters);
      setPaiements(res.data.results || res.data);
      // Calculer les stats depuis les données
      const all = res.data.results || res.data;
      const en_attente = all.filter(p => p.statut === 'en_attente').length;
      const approuve = all.filter(p => p.statut === 'approuve').length;
      const rejete = all.filter(p => p.statut === 'rejete').length;
      setStats({ total: all.length, en_attente, approuve, rejete });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadCles = useCallback(async () => {
    try {
      const res = await getAdminCles();
      setCles(res.data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadPaiements();
    loadCles();
  }, [loadPaiements, loadCles]);

  const value = {
    paiements,
    cles,
    stats,
    loading,
    error,
    loadPaiements,
    loadCles,
    setPaiements,
    setCles,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};