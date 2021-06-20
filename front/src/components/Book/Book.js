import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../img/close.svg'


const Book = (props) => {
    const {
        id,
        title
    } = props;

    return (
        <li className="list__elements-item">
            <Link to={`/books/${id}`} >
                <p className="list__elements-item-title">{title}</p>
            </Link>
            <div id={id} onClick={props.handleRemove} className="list__elements-item-remove">
                <img src={close} alt="Remove from list"/>
            </div>
        </li>
    )
}

export default Book;