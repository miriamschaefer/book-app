import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';



const BookDetail = (props) => {

    const {
        title,
        author,
        isbn,
        id
    } = props;

    let matches = props.books.filter((book) => { return book.author === author && id !== book.id});

    const otherTitles =
     matches.map((book, i) => {

        return (
            <Link to={`/books/${id}`} key={i}>
                <li >{book.title}</li>
            </Link>
        )
    })

     console.log(matches);

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