import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';

const BookForm = () => {
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
      const timestamp = Date.now();
      const bookData = {
        title,
        author,
        item_id: timestamp.toString(),
        category: 'Category',
      };

      await dispatch(addBookAsync(bookData));
      setTitle('');
      setAuthor('');
      setErrorMessage('');
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
};

export default BookForm;
