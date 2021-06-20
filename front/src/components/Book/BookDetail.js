import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';
import { useHistory } from 'react-router-dom';



const BookDetail = (props) => {

    const {
        title,
        author,
        isbn,
        id,
        handleRemove
    } = props;

    let matches = props.books.filter((book) => { return parseInt(book.author) === author && id !== parseInt(book.id) });

    const history = useHistory();

    

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
            <div onClick={() => history.push(`/edit/${id}`)}>
                Edit
            </div>
        </div>
    )
}

export default BookDetail;