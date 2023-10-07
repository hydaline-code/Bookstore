import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  categories: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkstatus: (state) => state,

  },

});

export const { reducer: categoriesReducer, actions: categoriesActions } = categoriesSlice;

export default categoriesSlice.reducer;
