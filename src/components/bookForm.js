import React, { useState } from 'react';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new book object
    const newBook = {
      id: Math.random(),
      title,
      author,
    };
    // Call the onAdd function with the new book
    onAdd(newBook);
    // Reset the form fields
    setTitle('');
    setAuthor('');
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
    </div>
  );
}

export default BookForm;
