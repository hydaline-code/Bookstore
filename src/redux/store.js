import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/booksSlice";
import { categoriesReducer } from "./categories/categoriesSlice";

const store = storeConfig ({
  reducer: {
    books: bookReducer, // Include the books slice reducer
    categories: categoriesReducer, // Include the categories slice reducer
   
  },
})

export default store;

