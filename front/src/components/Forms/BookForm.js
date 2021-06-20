import React, { useState } from 'react';
import Header from '../Layout/Header';
import BackLink from '../Layout/BackLink';

const BookForm = (props) => {

  const [book, setBook] = useState({
      title: props.book ? props.book.title : '',
      author: props.book ? props.book.author : '',
      isbn: props.book ? props.book.isbn : '',
  });

  const [error, setError] = useState('');
  const { title, author, isbn } = book;

  const handleOnSubmit = (ev) => {
    ev.preventDefault();

    const values = [title, author, isbn];
    let error = '';

    const completedForm = values.every((field) => {
      return field !== '';
    });

  function getNewId(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    if (completedForm) {
      const book = {
        id: getNewId(1, 199),
        title,
        author,
        isbn
      };

      props.handleOnSubmit(book);

    } else {
        error = '* Rellena todos los campos';
    }
      setError(error);
  };

  const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setBook((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

  return (

    <>
    <Header />
    <main className="form">
      <BackLink />

      <form className="form__elements" onSubmit={handleOnSubmit}>
        <div className="form__elements-group">
          <label htmlFor="title" >Book Name</label>
            <input
              type="text"
              name="title"
              className="form__elements-group-input"
              value={title}
              placeholder="Title"
              onChange={handleInputChange}
            />
          </div>
          <div className="form__elements-group">
              <label htmlFor="author">Book Author</label>
              <input
                type="text"
                className="form__elements-group-input"
                name="author"
                value={author}
                placeholder="Author"
                onChange={handleInputChange}
              />
          </div>
          <div className="form__elements-group">
            <label htmlFor="isbn">Book ISBN</label>
              <input
                  className="form__elements-group-input"
                  type="text"
                  name="isbn"
                  value={isbn}
                  placeholder="ISBN"
                  onChange={handleInputChange}
              />
            </div>
            <button className="form__elements-btn" type="submit">
                Submit
            </button>
        </form>
        {error && <p className="form__error">{error}</p>}
    </main>
  </>
  );
};

export default BookForm;