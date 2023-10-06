// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import BookList from './bookList';
// import BookForm from './bookForm';
// import Navigation from './navigation';
// import { addBook, removeBook } from '../redux/books/booksSlice';

// function BookContainer() {
//   // Use useSelector to access the books data from the Redux store
//   const books = useSelector((state) => state.books);

//   // Get the dispatch function from Redux
//   const dispatch = useDispatch();

//   const handleAddBook = (newBook) => {
//     dispatch(addBook(newBook));
//   };

//   const handleDeleteBook = (book) => {
//     dispatch(removeBook(book));
//   };

//   return (
//     <div className="panel-bg">
//       <Navigation />

//       <div className="scrollable-container">
//         <BookList books={books} onDelete={handleDeleteBook} />
//       </div>

//       <div className="panel">
//         <BookForm onAdd={handleAddBook} />
//       </div>

//     </div>
//   );
// }

// export default BookContainer;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './bookList';
import BookForm from './bookForm';
import Navigation from './navigation';
import { fetchBooksAsync, addBookAsync, removeBookAsync } from '../redux/books/booksSlice';

function BookContainer({ appId }) {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync(appId));
  }, [dispatch, appId]);

  const handleAddBook = (newBook) => {
    dispatch(addBookAsync({ appId, book: newBook }));
  };

  const handleDeleteBook = (itemId) => {
    dispatch(removeBookAsync({ appId, itemId }));
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