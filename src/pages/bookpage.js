import React from 'react';
import BookContainer from '../components/bookContainer';
import BookForm from '../components/bookForm';

function Bookpage() {
  return (
    <div className="page">
      <BookContainer />

      <div className="panel">
        <BookForm />
      </div>

    </div>
  );
}

export default Bookpage;
