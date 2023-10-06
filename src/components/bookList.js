
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync, removeBookAsync } from '../redux/books/booksSlice';
import BookCard from './book';

function BookList() {
  const booksObject = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const handleRemove = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  const booksArray = Object.values(booksObject);

  return (
    <div className="booklist">
      {booksArray.map((book) => (
        <BookCard
        key={book.itemId}
        title={book.title}  
        author={book.author}
          itemId={book.itemId}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default BookList;