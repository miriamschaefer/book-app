import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../Layout/BackLink';
import { useHistory } from 'react-router-dom';
import Header from '../Layout/Header';



const BookDetail = (props) => {

    const {
        title,
        author,
        isbn,
        id,
    } = props;



    const history = useHistory();


    return (
        <>
        <Header />
            <main className="detail">
                <BackLink />
                <section className="detail__info detail__info--author">
                    <p className="detail__info-title">{title}</p>
                    <p className="detail__info-author">{author}</p>
                    <p className="detail__info-isbn">ISBN: {isbn}</p>
                </section>
                <div onClick={() => history.push(`/edit/${id}`)} className="detail__edit">
                    Edit
                </div>
            </main>
        </>
    )
}

export default BookDetail;