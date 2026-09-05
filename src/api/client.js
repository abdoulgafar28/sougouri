import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Pour les requêtes multipart (upload d'images)
export const clientMultipart = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// --- Endpoints existants ---
export const getInfosAbonnement = () => client.get('/abonnement/infos/');
export const soumettrePaiementCapture = (data) => clientMultipart.post('/abonnement/paiement/capture/', data);
export const soumettrePaiementManuel = (data) => client.post('/abonnement/paiement/manuelle/', data);
export const getStatutDemande = (ref) => client.get(`/abonnement/statut/${ref}/`);
export const getHistorique = (telephone) => client.get(`/abonnement/historique/${telephone}/`);
export const validerCle = (data) => client.post('/abonnement/valider-cle/', data);

// --- Endpoints admin (à créer côté Django) ---
// On va les simuler pour le moment, mais vous devrez les implémenter
export const getAdminPaiements = (params) => client.get('/admin/paiements/', { params });
export const getAdminPaiementDetail = (id) => client.get(`/admin/paiements/${id}/`);
export const traiterPaiement = (id, data) => client.post(`/admin/paiements/${id}/traiter/`, data);
export const getAdminCles = () => client.get('/admin/cles/');

export default client;