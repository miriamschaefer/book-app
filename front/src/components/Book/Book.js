import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Book = (props) => {
    const {
        id,
        title
    } = props;

    // const history = useHistory();

    return (
        <>
            <Link to={`/books/${id}`} >
                <li>{title}</li>
            </Link>
            <p id={id} onClick={props.handleRemove}>X</p>
            {/* <div onClick={() => history.push(`/edit/${id}`)}>
                Edit
            </div> */}
        </>
    )
}

export default Book;