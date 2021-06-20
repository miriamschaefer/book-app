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
        <>
            <Header />
            <main className="list">
                
                <h2 className="list__title">Authors</h2>
                <p className="list__subtitle">Click on the names to check details or just remove them by clicking the icon.</p>

                <div className="list__navigation">
                    <BackLink />
                    <Link to="/addauthor" className="list__navigation-add">
                        Add more authors
                    </Link>
                </div>
                <ul className="list__elements">
                    {itemList}
                </ul>
            </main>
        </>
    )
}

export default AuthorsList;