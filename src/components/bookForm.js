import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
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
    // clear the form fields after inputs
    setTitle('');
    setAuthor('');
  };

  const handleAddBook = (newBook) => {
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
        <button type="submit" onClick={handleAddBook}>Add</button>
      </form>
    </div>
  );
}

export default BookForm;
