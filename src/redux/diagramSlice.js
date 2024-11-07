// src/redux/slices/diagramsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveDiagram, getAllDiagrams, getDiagramById, updateDiagram, deleteDiagram } from '../../services/diagramService';

export const fetchDiagrams = createAsyncThunk('diagrams/fetchAll', async () => {
  const diagrams = await getAllDiagrams();
  return diagrams;
});

export const createNewDiagram = createAsyncThunk('diagrams/create', async ({ name, data }) => {
  const id = await saveDiagram(name, data);
  return { id, name, data };
});

export const editDiagram = createAsyncThunk('diagrams/edit', async ({ id, data }) => {
  await updateDiagram(id, data);
  return { id, data };
});

export const removeDiagram = createAsyncThunk('diagrams/delete', async id => {
  await deleteDiagram(id);
  return id;
});

const diagramsSlice = createSlice({
  name: 'diagrams',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDiagrams.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(createNewDiagram.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editDiagram.fulfilled, (state, action) => {
        const index = state.items.findIndex(diag => diag.id === action.payload.id);
        if (index !== -1) {
          state.items[index].data = action.payload.data;
        }
      })
      .addCase(removeDiagram.fulfilled, (state, action) => {
        state.items = state.items.filter(diag => diag.id !== action.payload);
      });
  },
});

export default diagramsSlice.reducer;
