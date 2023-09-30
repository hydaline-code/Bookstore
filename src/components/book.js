import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function BookCard({ title, author, itemId }) {
  const progress = 50;
  const currentChapter = 'Chapter 3';
  const lesson = 'Lesson 7';

  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="book-card">
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="bookbuttons">
          <button className="leftButton" type="button">Comment</button>
          <button
            type="button"
            onClick={() => handleRemove(itemId)}
          >
            Delete
          </button>
          <button className="leftButton" type="button">Edit</button>
        </div>
      </div>

      <div className="progress-bar">
        <div className="Oval-2" />
        <span className="-Percent-Complete Text-Style-5">

          {progress}
          %
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

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default BookCard;
