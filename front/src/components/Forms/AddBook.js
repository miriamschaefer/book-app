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
    
    const handleOnSubmit = (book) => {
        setBooks([...books, book]);
        history.push('/books');
    }

    const handleSubmitAuthor = (author) => {
      setAuthors([...authors, author]);
      history.push('/authors');
    }

  return (
    <React.Fragment>
      {history.location.pathname === '/addbook' &&
      <BookForm handleOnSubmit={handleOnSubmit} books={books} history={history}/>
      }
      {history.location.pathname === '/addauthor' &&
        <AuthorForm handleSubmitAuthor={handleSubmitAuthor} authors={authors} history={history}/>
      }
    </React.Fragment>
  );
};

export default AddBook;