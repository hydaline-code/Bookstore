import React from 'react';
import Book from './book';

function BookList({ books }) {
  return (
    <div className='booklist'>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => handleDelete(book.id)}
        />
      ))}
    </div>
  );
}

export default BookList;
