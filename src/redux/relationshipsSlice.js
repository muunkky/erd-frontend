// src/redux/slices/relationshipsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const relationshipsSlice = createSlice({
  name: 'relationships',
  initialState: {
    relationships: [],
    creating: null, // { startEntityId, currentPosition }
  },
  reducers: {
    startCreatingRelationship: (state, action) => {
      state.creating = { startEntityId: action.payload, currentPosition: { x: 0, y: 0 } };
    },
    updateCreatingRelationship: (state, action) => {
      if (state.creating) {
        state.creating.currentPosition = action.payload;
      }
    },
    finishCreatingRelationship: (state, action) => {
      if (state.creating) {
        state.relationships.push({
          id: action.payload.id,
          startEntityId: state.creating.startEntityId,
          endEntityId: action.payload.endEntityId,
          // Additional relationship data
        });
        state.creating = null;
      }
    },
    cancelCreatingRelationship: state => {
      state.creating = null;
    },
  },
});

export const {
  startCreatingRelationship,
  updateCreatingRelationship,
  finishCreatingRelationship,
  cancelCreatingRelationship,
} = relationshipsSlice.actions;

export default relationshipsSlice.reducer;
