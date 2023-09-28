import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/booksSlice';
import { categoriesReducer } from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer, // Include the books slice reducer
    categories: categoriesReducer, // Include the categories slice reducer

  },
});

export default store;
