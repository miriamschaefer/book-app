import React from 'react';
import { Link } from 'react-router-dom';


const Main = () => {

    return(
        <ul>
            <Link to="/authors">
                <li>Authors</li>
            </Link>
            <Link to="/books">
                <li>Books</li>
            </Link>
        </ul>
    )
}

export default Main;