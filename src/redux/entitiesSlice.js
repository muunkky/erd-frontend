// src/redux/slices/entitiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: [],
  reducers: {
    addEntity: (state, action) => {
      state.push(action.payload);
    },
    updateEntity: (state, action) => {
      const index = state.findIndex(entity => entity.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeEntity: (state, action) => {
      return state.filter(entity => entity.id !== action.payload);
    },
  },
});

export const { addEntity, updateEntity, removeEntity } = entitiesSlice.actions;
export default entitiesSlice.reducer;
