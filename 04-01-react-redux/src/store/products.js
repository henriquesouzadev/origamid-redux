import { createSlice } from '@reduxjs/toolkit';
import data from '../api/data';

const slice = createSlice({
  name: 'products',
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        max: 0,
        min: 0,
      }
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value
    }    
  },
});

export const { changeFilters } = slice.actions

export default slice.reducer;

export const selectedUniqueColors = ({ products }) => (
  [...new Set(products.data.map(({ color }) => color))]
)

