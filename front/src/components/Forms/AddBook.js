import React from 'react';
import BookForm from './BookForm';

const AddBook = (props) => {

    const {
        history,
        setAddedBooks,
        addedBooks,
    } = props;

    const handleOnSubmit = (book) => {
        setAddedBooks([book, ...addedBooks]);
        history.push('/books');
        console.log(book)
      };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;