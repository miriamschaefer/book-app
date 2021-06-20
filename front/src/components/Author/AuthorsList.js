import React from 'react';
import BackLink from '../Layout/BackLink';
import Author from './Author';
import Header from '../Layout/Header';
import { Link } from 'react-router-dom';

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
        <main className="list">
            <Header />
            <BackLink />
            <h2 className="list__title">Authors</h2>
            <Link to="/addauthor" className="list__add">
                Add more authors
            </Link>

            <ul className="list__elements">
                {itemList}
            </ul>
        </main>
    )
}

export default AuthorsList;