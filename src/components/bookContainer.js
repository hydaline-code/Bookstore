// import React from 'react';
// import Navigation from './navigation';
// import Book from './book';

// function BookContainer() {
//   return (
//     <div className="panel-bg">
//         <Navigation />
//     <Book />
//     </div>
//   );
// }

// export default BookContainer;

// import React, { useState } from 'react';
// import Navigation from './navigation';
// import BookList from './bookList';
// import BookForm from './bookForm';

// function BookContainer() {
//   const [books, setBooks] = useState([]);

//   const handleAddBook = (newBook) => {
//     setBooks([...books, newBook]);
//   };

//   const handleDeleteBook = (bookId) => {
//     setBooks(books.filter((book) => book.id !== bookId));
//   };

//   return (
//     <div className="panel-bg">
//       <Navigation />

//       <BookList books={books} onDelete={handleDeleteBook} />
//       <BookForm onAdd={handleAddBook} />
//     </div>
//   );
// }

// export default BookContainer;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './bookList';
import BookForm from './bookForm';
import { addBook, removeBook } from '../redux/books/booksSlice'; 

function BookContainer() {
  // Use useSelector to access the books data from the Redux store
  const books = useSelector((state) => state.books);

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    // Dispatch the addBook action with the new book object
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (book) => {
    // Dispatch the removeBook action with the entire book object
    dispatch(removeBook(book));
  };

  return (
    <div className="panel-bg">
      <Navigation />

      <div className="scrollable-container">
        <BookList books={books} onDelete={handleDeleteBook} />
      </div>

      <div className="panel">
      <BookForm onAdd={handleAddBook} />
    </div>
     
    </div>
  );
}

export default BookContainer;
