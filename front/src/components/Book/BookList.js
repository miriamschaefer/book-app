import React from 'react';
import BackLink from '../Layout/BackLink';
import Book from './Book'



const BookList = ({ books, setBooks }) => {

    const handleRemove = (ev) => {
        setBooks(books.filter((book) => parseInt(book.id) !== parseInt(ev.currentTarget.id)));
    };

    const itemList =
        books.map((book, i) => {
            return (
                <Book key={i} handleRemove={handleRemove} book={book} {...book} />
            )
        })

    return (
        <>
            <BackLink />
            <h1>Books</h1>
            <ul>
                {itemList}
            </ul>
        </>
    )
}

export default BookList;