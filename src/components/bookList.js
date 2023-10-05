// import React from 'react';
// import { useSelector } from 'react-redux';
// import Book from './book';
// import { fetchBooks, removeBookFromApi } from '../redux/books/booksSlice';


// function BookList() {
//   const books = useSelector((state) => state.books.data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const handleRemoveBook = (bookId) => {
//     dispatch(removeBookFromApi(bookId));
//   };

//   return (
//     <div className="booklist">
//       {books.map((book) => (
//         <Book
//           key={book.item_id}
//           title={book.title}
//           author={book.author}
//           itemId={book.item_id}
//           onRemove={() => handleRemoveBook(book.item_id)} 
//         />
//       ))}
//     </div>
//   );
// }

// export default BookList;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { fetchBooks, removeBookFromApi } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (bookId) => {
    dispatch(removeBookFromApi(bookId));
  };

  return (
    <div className="booklist">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          itemId={book.item_id}
          onRemove={() => handleRemoveBook(book.item_id)}
        />
      ))}
    </div>
  );
}

export default BookList;
