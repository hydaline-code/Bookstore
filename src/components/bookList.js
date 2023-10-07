import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync } from '../redux/books/booksSlice';
import BookCard from './book';

const BookList = () => {
  const booksObject = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const booksArray = Object.values(booksObject);

  return (
    <div className="booklist">
      {booksArray.map((book) => (
        <BookCard
          key={book.item_id}
          title={book.title}
          author={book.author}
          itemId={book.item_id}
        />
      ))}
    </div>
  );
};

export default BookList;
