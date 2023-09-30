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
import { fetchBooksAsync, removeBookAsync } from '../redux/books/booksSlice';
import Book from './book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const appId = 'ziBZnIbKCK5TSoqAhCmP'; // Replace with your API app ID

  useEffect(() => {
    dispatch(fetchBooksAsync(appId));
  }, [dispatch, appId]);

  const handleRemove = (itemId) => {
    dispatch(removeBookAsync({ appId, itemId }));
  };

  return (
    <div className="booklist">
      {books.map((book) => (
        <Book
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
