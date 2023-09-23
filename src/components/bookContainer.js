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

import React, { useState } from 'react';
import Navigation from './navigation';
import BookList from './bookList';
import BookForm from './bookForm';

function BookContainer() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div className="panel-bg">
      <Navigation />

      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
}

export default BookContainer;
