import React from 'react';
import BackLink from '../Layout/BackLink';
import Author from './Author';

const AuthorsList = ({ authors, setAuthors }) => {

    const handleRemove = (ev) => {
        console.log(ev.currentTarget.id)
        setAuthors(authors.filter((author) => author.id !== ev.currentTarget.id));
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