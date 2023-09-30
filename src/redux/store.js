import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducerDefault from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducerDefault,
  },
});

export default store;
