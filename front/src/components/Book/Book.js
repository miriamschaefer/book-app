import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const {
        id,
        title
    } = props.book;

    return (
        <>
            <Link to={`/books/${id}`} >
                <li>{title}</li>
                
            </Link>
            <p id={id} onClick={props.handleRemove}>X</p>
        </>
    )
}

export default Book;