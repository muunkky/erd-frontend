// src/services/diagramApiService.js
import api from './api';

export const fetchDiagrams = async () => {
  const response = await api.get('/diagrams');
  return response.data;
};

export const createDiagram = async (name, data) => {
  const response = await api.post('/diagrams', { name, data });
  return response.data;
};

export const updateDiagram = async (id, name, data) => {
  const response = await api.put(`/diagrams/${id}`, { name, data });
  return response.data;
};

export const deleteDiagram = async id => {
  const response = await api.delete(`/diagrams/${id}`);
  return response.data;
};
