import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';
import { useHistory } from 'react-router-dom';


const AuthorDetail = (props) => {

    const {
        last_name,
        first_name,
        id
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

    const history = useHistory();

    return (
        <div>
            <BackLink />
            {first_name}
            {last_name}

            <ul>
                {otherTitles}
            </ul>
            <div onClick={() => history.push(`/editauthor/${id}`)}>
                Edit
            </div>
        </div>
    )
}

export default AuthorDetail;