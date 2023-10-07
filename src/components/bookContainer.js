import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './bookList';
import Navigation from './navigation';
import { removeBookAsync } from '../redux/books/booksSlice';

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (book) => {
    dispatch(removeBookAsync(book));
  };

  return (
    <div className="panel-bg">
      <Navigation />

      <div className="scrollable-container">
        <BookList books={books} onDelete={handleDeleteBook} />
      </div>

    </div>
  );
};

export default BookContainer;
