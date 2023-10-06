import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0vHIXZ1klByIbEZsVgzM/books';
const api = axios.create();

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await api.get(apiEndpoint);
    const booksData = response.data;
    // eslint-disable-next-line camelcase
    const booksArray = Object.keys(booksData).map((item_id) => ({
      item_id,
      ...booksData[item_id][0],
    }));
    return booksArray;
  } catch (error) {
    // console.error('Error fetching books:', error);
    throw error;
  }
});

// Create async thunk for adding a book
// eslint-disable-next-line camelcase
export const addBookAsync = createAsyncThunk('books/addBook', async ({
  // eslint-disable-next-line camelcase
  title, author, category, item_id,
}) => {
  try {
    const response = await api.post(apiEndpoint, {
      // eslint-disable-next-line camelcase
      title, author, category, item_id,
    });
    return response.data;
  } catch (error) {
    // console.error('Error adding book:', error);
    throw error;
  }
});

// export const removeBookAsync = createAsyncThunk('books/removeBook', async (item_id) => {
//   try {
//     const response = await api.delete(`${apiEndpoint}/${item_id}`);
//     return response.data;
//   } catch (error) {
//     // console.error('Error removing book:', error);
//     throw error;
//   }
// });

// eslint-disable-next-line camelcase
export const removeBookAsync = createAsyncThunk('books/removeBook', async (item_id) => {
  // eslint-disable-next-line camelcase
  const response = await api.delete(`${apiEndpoint}/${item_id}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  isLoading: true,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => action.payload)
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
      }))
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
