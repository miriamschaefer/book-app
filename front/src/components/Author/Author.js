import React from 'react';
import { Link } from 'react-router-dom';

const Author = (props) => {

    const {
        first_name,
        last_name,
        id
    } = props;

    return (
        <>
            <Link to={`/authors/${id}`} >
                <li>{first_name} {last_name}</li>
            </Link>
            <p id={id} onClick={props.handleRemove}>X</p>
        </>
    )
}

export default Author;