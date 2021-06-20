import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';



const BookDetail = (props) => {

    const {
        title,
        author,
        isbn,
        id,
        handleRemove
    } = props;

    let matches = props.books.filter((book) => { return parseInt(book.author) === author && id !== parseInt(book.id) });

    const otherTitles =
     matches.map((book, i) => {

        return (
            <>
                <Link to={`/books/${id}`} key={i}>
                    <li >{book.title}</li>
                </Link>
                <p onClick={handleRemove(id)}>X</p>
            </>
        )
    });

    return (
        <div>
            <BackLink />
            {title}
            {author}
            {isbn}
            <ul>{otherTitles}</ul>
        </div>
    )
}

export default BookDetail;