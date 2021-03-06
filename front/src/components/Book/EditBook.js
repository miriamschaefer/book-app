import React from 'react';
import BookForm from '../Forms/BookForm';
import { useParams } from 'react-router-dom';

const EditBook = ({ history, books, setBooks }) => {

    const { id } = useParams();

    const bookToEdit = books.find((book) => parseInt(book.id) === parseInt(id));

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book) => parseInt(book.id) !== parseInt(id));
        setBooks([book, ...filteredBooks]);
        history.push('/books');
  };
  return (
        <div>
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
  );

}

export default EditBook;