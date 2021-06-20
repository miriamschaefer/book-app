import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../img/close.svg'

const Author = (props) => {

    const {
        first_name,
        last_name,
        id
    } = props;

    return (
        <li className="list__elements-item">
            <Link to={`/authors/${id}`} >
                <p className="list__elements-item-title">{first_name} {last_name}</p>
            </Link>
            <div id={id} onClick={props.handleRemove} className="list__elements-item-remove">
                <img src={close} alt="Remove from list"/>
            </div>
        </li>
    )
}

export default Author;