import React from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const AddBook = (props) => {

    const {
      history,
      authors,
      setAuthors,
      setBooks,
      books
    } = props;

    const handleOnSubmit = (book, author) => {

      if(history.location.pathname === "/addbook") {
        setBooks([...books, book]);
        history.push('/books');

      } else if(history.location.pathname === "/addauthor") {

        setAuthors([...authors, author]);
        history.push('/authors');
      };
    }

  return (
    <React.Fragment>
      {history.location.pathname === '/addbook' &&
      <BookForm handleOnSubmit={handleOnSubmit} books={books} history={history}/>
      }
      {history.location.pathname === '/addauthor' &&
        <AuthorForm handleOnSubmit={handleOnSubmit} authors={authors} history={history}/>
      }
    </React.Fragment>
  );
};

export default AddBook;