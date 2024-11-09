// src/services/diagramDbService.js
import db from '../utils/db';

export const saveDiagram = async (name, data) => {
  const timestamp = new Date().toISOString();
  return await db.diagrams.add({
    name,
    data,
    createdAt: timestamp,
    updatedAt: timestamp,
  });
};

export const getAllDiagrams = async () => {
  return await db.diagrams.toArray();
};

export const getDiagramById = async id => {
  return await db.diagrams.get(id);
};

export const updateDiagram = async (id, updatedData) => {
  const timestamp = new Date().toISOString();
  return await db.diagrams.update(id, {
    data: updatedData,
    updatedAt: timestamp,
  });
};

export const deleteDiagram = async id => {
  return await db.diagrams.delete(id);
};
