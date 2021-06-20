import React from 'react';
import BackLink from '../Layout/BackLink';
import Book from './Book';
import Header from '../Layout/Header';
import { Link } from 'react-router-dom'

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
            <Header />
            <main className="list">

            <h2 className="list__title">Books</h2>
            <p className="list__subtitle">Click on the names to check details or just remove them by clicking the icon.</p>
            
            <div className="list__navigation">
                <BackLink />
                <Link to="/addbook" className="list__navigation-add">
                    Add more books
                </Link>
            </div>
                <ul className="list__elements">
                    {itemList}
                </ul>
            </main>
        </>
    )
}

export default BookList;