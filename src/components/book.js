
import React from 'react';

function Book({ title, author, onDelete }) {
  return (
    <div className="bookcard">
   
      <h3>{title}</h3>
      <p>{author}</p>
   
    <button onClick={onDelete}>Delete</button>
  </div>
  );
}

export default Book;