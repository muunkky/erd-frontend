// src/utils/db.js
import Dexie from 'dexie';

const db = new Dexie('ERDToolDB');

db.version(1).stores({
  diagrams: '++id, name, data, createdAt, updatedAt',
});

export default db;
