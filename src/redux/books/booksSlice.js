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



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from '../bookstoreApi';

// Create async thunks for fetching books, adding a book, and removing a book
export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetchBooks();
  return response.data;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const response = await addBook(book);
  return response.data;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await removeBook(bookId);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        return state.filter((book) => book.id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
