// import React from 'react';
// import { useSelector } from 'react-redux';
// import Book from './book';

// function BookList() {
//   const books = useSelector((state) => state.books);

//   return (
//     <div className="booklist">
//       {books.map((book) => (
//         <Book
//           key={book.item_id}
//           title={book.title}
//           author={book.author}
//           itemId={book.item_id}
//         />
//       ))}
//     </div>
//   );
// }

// export default BookList;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems } from '../redux/books/booksSlice';
import Book from './book';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems()); // Dispatch the getBookItems action when the component mounts
  }, [dispatch]);

  return (
    <div className="booklist">
      {books.map((book) => (
        <Book
          key={book.itemId}
          title={book.title}
          author={book.author}
          itemId={book.itemId}
        />
      ))}
    </div>
  );
}

export default BookList;