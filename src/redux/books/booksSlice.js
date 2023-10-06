import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0vHIXZ1klByIbEZsVgzM/books';
const api = axios.create();

// Create async thunk for fetching books
export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await api.get(apiEndpoint);
  return response.data;
});

// Create async thunk for adding a book
export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const response = await api.post(apiEndpoint, book);
  return response.data;
});

// Create async thunk for removing a book
export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await api.delete(`${apiEndpoint}/${bookId}`);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => action.payload)
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) =>
        state.filter((book) => book.id !== action.payload)
      )
      .addCase(fetchBooksAsync.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        // Handle rejected state if needed
      })
      .addCase(addBookAsync.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(addBookAsync.rejected, (state) => {
        // Handle rejected state if needed
      })
      .addCase(removeBookAsync.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(removeBookAsync.rejected, (state) => {
        // Handle rejected state if needed
      });
  },
});

export default booksSlice.reducer;