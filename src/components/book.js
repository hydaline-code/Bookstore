import React from 'react';

function BookCard({ title, author, onDelete }) {
  const progress = 50;
  const currentChapter = 'Chapter 3';
  const lesson = 'Lesson 7';

  return (
    <div className="book-card">

      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <button type="button" onClick={onDelete}>Delete</button>
      </div>

      <div className="progress-bar">
        <div className="Oval-2" />
        <span className="-Percent-Complete Text-Style-10">
          64%
          <p className="state">completed</p>
        </span>

      </div>

      <div className="chapter-details">
        <span className="chapter-label">Current Chapter:</span>
        <span className="chapter-info">{currentChapter}</span>
        <span className="lesson-label">Current Lesson:</span>
        <span className="lesson-info">{lesson}</span>
      </div>

    </div>
  );
}

export default BookCard;
