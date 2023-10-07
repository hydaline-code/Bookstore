import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0vHIXZ1klByIbEZsVgzM/books';
const api = axios.create();

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await api.get(apiEndpoint);
      const booksData = response.data;
      const booksArray = Object.keys(booksData).map((key) => ({
        item_id: key,
        ...booksData[key][0],
      }));
      return booksArray;
    } catch (error) {
      throw error;
    }
  },
);

export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async ({
    title, author, category, item_id: itemId,
  }) => {
    try {
      const data = {
        title,
        author,
        category,
        item_id: itemId,
      };
      const response = await api.post(apiEndpoint, data);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/removeBook',
  async (itemId) => {
    const response = await api.delete(`${apiEndpoint}/${itemId}`);
    return itemId;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [], isLoading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
      });
  },
});

export default booksSlice.reducer;
