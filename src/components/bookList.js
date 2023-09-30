import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div className="booklist">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          itemId={book.item_id}
        />
      ))}
    </div>
  );
}

export default BookList;
