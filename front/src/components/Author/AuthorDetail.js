import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';
import { useHistory } from 'react-router-dom';
import Header from '../Layout/Header';


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
        <>
        <Header />
            <main className="detail">
                <BackLink />
                <section className="detail__info">
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                </section>

                {otherTitles.length > 0 ?
                    <section className="detail__books">
                        <h2 className="detail__books-title">Other titles by this author</h2>
                        <ul>
                            {otherTitles}
                        </ul>
                    </section>
                :
                null
            
                }
                
                <div onClick={() => history.push(`/editauthor/${id}`)} className="detail__edit">
                    <p>Edit</p>
                </div>
            </main>
        </>
    )
}

export default AuthorDetail;