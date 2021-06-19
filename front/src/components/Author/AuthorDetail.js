import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';


const AuthorDetail = (props) => {

    const {
        last_name,
        first_name,
    } = props;

    const concName = first_name.concat(" " + last_name);
    let matches = props.books.filter((book) => { return book.author === concName });

    const otherTitles =
     matches.map((book, i) => {

        return (
            <Link to={`/books/${book.id}`} key={i}>
                <li >{book.title}</li>
            </Link>
        )
    })

    return (
        <div>
            <BackLink />
            {first_name}
            {last_name}

            <ul>
                {otherTitles}
            </ul>
        </div>
    )
}

export default AuthorDetail;