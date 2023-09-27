import { createSlice } from "@reduxjs/toolkit"; // create a slice from the redux toolkit

const initialState = {
  //initializing an empty array of book
  book: [],
}
const  booksSlice = createSlice({
 name: 'books',
 initialState,
 reducers: {
   addbook: (state, action) => {
    state.book.push(action.payload);  
   }
   //adding a book function 
 },

 reducers: {
  removebook: (state, action) => {
    const bookId = action.payload;
   state.book = state.book.filter( book => book.id !== bookId);  
  }
}, // removing a book function  all applying reducers
})

export const { reducer: bookReducer, actions: bookActions } = booksSlice;

export default booksSlice.reducer;