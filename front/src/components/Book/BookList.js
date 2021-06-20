import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book'



const BookList = ({ books, setBooks, addedBooks }) => {

    const handleRemove = (ev) => {
        setBooks(books.filter((book) => parseInt(book.id) !== parseInt(ev.currentTarget.id)));
        console.log(books)
      };

    const itemList =
        books.map((book, i) => {

            return (
                <Book key={i} handleRemove={handleRemove} book={book} {...book} />
            )
        })

        const addedByYouList =
        addedBooks.map((book, i) => {
            const {
                title,
                id
            } = book;

            return (
                <Link to={`/books/${id}`} key={i}>
                    <li >{title}</li>
                </Link>
            )
        })

    return (
        <>
            <Link to="/">Back</Link>
            <h1>Books</h1>
            <ul>
                {itemList}
            </ul>
            <h1>Added by you</h1>
            <ul>
                {addedByYouList}
            </ul>
        </>
    )
}

export default BookList;