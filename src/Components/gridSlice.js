import { createSlice } from '@reduxjs/toolkit';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('gridState');
    return serializedState ? JSON.parse(serializedState) : Array(6).fill(null);
  } catch (e) {
    console.error("Could not load state", e);
    return Array(6).fill(null);
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.gridItems);
    localStorage.setItem('gridState', serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

// Initial state with data loaded from localStorage
const initialState = {
  gridItems: loadState(),
};

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { position, item } = action.payload;
      if (state.gridItems[position] === null) {
        state.gridItems[position] = item;
      }
      saveState(state); // Save state to localStorage after updating
    },
    removeItem: (state, action) => {
      const position = action.payload;
      state.gridItems[position] = null;
      saveState(state); // Save state to localStorage after updating
    },
    resetGrid: (state) => {
        state.gridItems = Array(6).fill(null);
        localStorage.removeItem('gridState'); // Clear localStorage
      },
  },
});

export const { addItem, removeItem, resetGrid } = gridSlice.actions;

export default gridSlice.reducer;
