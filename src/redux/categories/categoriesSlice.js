import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // initializing an empty array of book
  categories: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkstatus: (state) => 'Under construction',
    // checking the categories
  },

});

export const { reducer: categoriesReducer, actions: categoriesActions } = categoriesSlice;

export default categoriesSlice.reducer;
