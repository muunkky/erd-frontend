// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from './slices/entitiesSlice';
import relationshipsReducer from './slices/relationshipsSlice';
// Add other reducers as needed

const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    relationships: relationshipsReducer,
    // Add other reducers here
  },
});

export default store;
