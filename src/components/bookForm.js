// import React, { useState } from 'react';

// function BookForm({ onAdd }) {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Create new book object
//     const newBook = {
//       id: Math.random(),
//       title,
//       author,
//     };
//     // Call the onAdd function with the new book
//     onAdd(newBook);
//     // Reset the form fields
//     setTitle('');
//     setAuthor('');
//   };

//   return (
//     <div className="addform">
//       <h4>ADD A NEW BOOK</h4>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// export default BookForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice'; // Import your addBook action
import { v4 as uuidv4 } from 'uuid';

function BookForm({ books}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new book object with a unique itemId
    const newBook = {
      itemId: uuidv4(),
      title,
      author,
    };
    // Dispatch the addBook action with the new book data
    dispatch(addBook(newBook));
    // Reset the form fields
    setTitle('');
    setAuthor('');
  };

  const handleAddBook = (newBook) => {
    // Dispatch the addBook action with the new book object
    dispatch(addBook(newBook));
  };

  return (
    <div className="addform">
      <h4>ADD A NEW BOOK</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit"  onAdd={handleAddBook}>Add</button>
      </form>
    </div>
  );
}

export default BookForm;
