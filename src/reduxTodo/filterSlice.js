import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterByName: (state, action) => {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterByName } = filterSlice.actions;
