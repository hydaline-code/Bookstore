// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   {
//     item_id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item3',
//     title: 'The Selfish Gene',
//     author: 'Richard Dawkins',
//     category: 'Nonfiction',
//   },
// ];

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//     },
//     removeBook: (state, action) => {
//       const itemId = action.payload;
//       return state.filter((book) => book.item_id !== itemId);
//     },
//   },
// });

// export const { addBook, removeBook } = booksSlice.actions;
// export default booksSlice.reducer;


// redux/books/booksSlice.js


import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ziBZnIbKCK5TSoqAhCmP/books';

export const getBookItems = createAsyncThunk('books/getBookItems', async (_, thunkAPI) => {
  try {
    const response = await axios.get(apiURL);
    return response.data; // Return the fetched data as the payload
  } catch (error) {
    throw error; // Rethrow the error to be caught by the rejected case
  }
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(apiURL, book);
      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      throw error;
    }
  },
);

export const removeBook = createAsyncThunk('books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${apiURL}/${itemId}`);

      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      throw error;
    }
  });

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: true,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBookItems.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default booksSlice.reducer;