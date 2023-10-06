import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0vHIXZ1klByIbEZsVgzM/books';
const api = axios.create();

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await api.get(apiEndpoint);
    const booksData = response.data;
    const booksArray = Object.values(booksData).flatMap((bookArray) => bookArray);

    return booksArray;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
});

// Create async thunk for adding a book
export const addBookAsync = createAsyncThunk('books/addBook', async ({
  title, author, category, itemId,
}) => {
  try {
    const response = await api.post(apiEndpoint, {
      title, author, category, itemId,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId) => {
  try {
    const response = await api.delete(`${apiEndpoint}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing book:', error);
    throw error;
  }
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
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const itemIdToRemove = action.payload;

        return state.filter((book) => book.itemId !== itemIdToRemove);
      })
      .addCase(fetchBooksAsync.pending, (state) => {

      })
      .addCase(fetchBooksAsync.rejected, (state) => {

      })
      .addCase(addBookAsync.pending, (state) => {

      })
      .addCase(addBookAsync.rejected, (state) => {

      })
      .addCase(removeBookAsync.pending, (state) => {

      })
      .addCase(removeBookAsync.rejected, (state) => {

      });
  },
});

export default booksSlice.reducer;
