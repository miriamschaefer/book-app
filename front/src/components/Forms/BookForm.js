import React, { useState } from 'react';

const BookForm = (props) => {
  const {
    books
  } = props;

  const [book, setBook] = useState({
      title: props.book ? props.book.title : '',
      author: props.book ? props.book.author : '',
      isbn: props.book ? props.book.isbn : '',
  });

  const [error, setError] = useState('');
  const { title, author, isbn } = book;

  const handleOnSubmit = (ev) => {
    debugger;
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
    <div className="">

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Book Name</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={handleInputChange}
          />
        <label htmlFor="author">Book Author</label>
          <input
            type="text"
            name="author"
            value={author}
            placeholder="Author"
            onChange={handleInputChange}
          />
        <label htmlFor="isbn">Book ISBN</label>
          <input
              type="text"
              name="isbn"
              value={isbn}
              placeholder="ISBN"
              onChange={handleInputChange}
          />
            <button type="submit">
                Submit
            </button>
        </form>
        {error && <p className="">{error}</p>}
    </div>
  );
};

export default BookForm;