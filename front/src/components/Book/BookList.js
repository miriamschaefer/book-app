import React from 'react';
import { Link } from 'react-router-dom';



const BookList = (props) => {

    // const handleRemoveBook = (id) => {
    //     setBooks(books.filter((book) => book.id !== id));
    //   };

    const itemList =
        props.books.map((book, i) => {
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
        </>
    )
}

export default BookList;