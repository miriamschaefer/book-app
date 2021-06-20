import React from 'react';
import BackLink from '../Layout/BackLink';
import Author from './Author';

const AuthorsList = ({ authors, setAuthors }) => {

    console.log(authors)

    const handleRemove = (ev) => {
        setAuthors(authors.filter((author) => parseInt(author.id) !== parseInt(ev.currentTarget.id)));
    };

        const itemList =
            authors.map((author, i) => {
                return (
                    <Author key={i} handleRemove={handleRemove} author={author} {...author} />
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