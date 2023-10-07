import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAsync } from '../redux/books/booksSlice';

const BookCard = ({ title, author, itemId }) => {
  const progress = 50;
  const currentChapter = 'Chapter 3';

  const dispatch = useDispatch();
  const handleRemove = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="book-card">
      <div className="book-details">
        <div className='book'>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        </div>
        <div className="bookbuttons">
          <button className="leftButton comment" type="button"> Comment </button>
          <button
            className="leftButton"
            type="button"
            onClick={() => handleRemove(itemId)}
          >
            <span className="verticalline" />
            Delete
          </button>
          <button className="leftButton" type="button">
            <span className="verticalline" />
            Edit
          </button>
        </div>
      </div>

      <div className="progress-bar">
        <div className="Oval-2" />
        <span className="-Percent-Complete">
          {progress}
          %
          <p className="state">completed</p>
        </span>
      </div>

      <div className="vertical-line" />
      <div className="chapter-details">
        <span className="chapter-label">CURRENT CHAPTER :</span>
        <span className="chapter-info">{currentChapter}</span>
        <button type="submit" className="lesson-info">Update Progress</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default BookCard;
