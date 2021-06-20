import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const Main = () => {

    return(

        <main className="distributor">
            <Header />
            <ul className="distributor__list">
                <Link to="/authors" className="distributor__list-elem">
                    <li>Authors</li>
                </Link>
                <Link to="/books" className="distributor__list-elem">
                    <li>Books</li>
                </Link>
            </ul>
        </main>
    )
}

export default Main;