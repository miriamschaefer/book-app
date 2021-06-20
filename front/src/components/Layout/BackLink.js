import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = () => {
    
    return (
        <Link to="/" className="list__navigation-back list__navigation-back--form">Back</Link>
    )
}

export default BackLink;