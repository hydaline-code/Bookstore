import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync, fetchBooksAsync } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) {
      setErrorMessage('Please fill in all the fields before adding the book.');
      return;
    }

    try {
      await dispatch(addBookAsync({ title, author }));
      setTitle('');
      setAuthor('');
      setErrorMessage('');
      await dispatch(fetchBooksAsync());
    } catch (error) {
      setErrorMessage('Error adding book. Please try again later.');
    }
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
        <button type="submit">Add</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default BookForm;
  


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { addBookAsync } from '../redux/books/booksSlice';

// function BookForm({ appId }) {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Create new book object with a unique itemId
//     const newBook = {
//       itemId: uuidv4(),
//       title,
//       author,
//     };
//     // Dispatch the addBookAsync thunk with the app ID and new book data
//     dispatch(addBookAsync({ book: newBook }));
//     // Clear the form fields after inputs
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
//         <button type="submit" onClick={handleAddBook} >Add</button>
//       </form>
//     </div>
//   );
// }

// export default BookForm;


