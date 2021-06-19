import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';

const AuthorsList = (props) => {

    const itemList =
        props.authors.map((author, i) => {
            const {
                last_name,
                first_name,
                id
            } = author;

            return (
                <Link to={`/authors/${id}`} key={i}>
                    <li >{first_name} {last_name}</li>
                </Link>
            )
        })

    return (
        <>
            <BackLink />
            <h1>Authors</h1>

            <ul>
                {itemList}
            </ul>
        </>
    )
}

export default AuthorsList;