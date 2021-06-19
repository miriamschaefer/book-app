import React, { useState } from 'react';

const BookForm = (props) => {

    const {
        addedBooks,
        books
    } = props;

  const [book, setBook] = useState({
    title: props.book ? props.book.title : '',
    author: props.book ? props.book.author : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { title, author } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, author];
    let errorMsg = '';

    const formFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '';
    });


    if (formFilled) {
      const book = {
        id: addedBooks.length + books.length + 1,
        title,
        author,
      };

      props.handleOnSubmit(book);
    } else {
      errorMsg = '* Rellena todos los campos';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setBook((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

  return (
    <div className="main-form">

        {errorMsg && <p className="errorMsg">{errorMsg}</p>}

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
            <button type="submit">
                Submit
            </button>
        </form>
    </div>
  );
};

export default BookForm;