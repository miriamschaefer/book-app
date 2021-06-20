import React, { useState }from 'react';

const AuthorForm = (props) => {
    const {
        authors
    } = props;

    const [author, setAuthor] = useState({
        first_name: props.author ? props.author.first_name : '',
        last_name: props.author ? props.author.last_name : ''
    });

    const { first_name, last_name} = author;

    const handleOnSubmit = (ev) => {
        ev.preventDefault();

        // const values = [first_name, last_name];

        const newId = authors[authors.length - 1].id + 1;

        const author = {
            id: newId,
            first_name,
            last_name
        };

        props.handleOnSubmit(author)
    }

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setAuthor((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    return(
        <div className="">

        <form onSubmit={handleOnSubmit}>
            <label htmlFor="first_name">Name</label>
            <input
                type="text"
                name="first_name"
                value={first_name}
                placeholder="Name"
                onChange={handleInputChange}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
                type="text"
                name="last_name"
                value={last_name}
                placeholder="Last Name"
                onChange={handleInputChange}
            />
                <button type="submit">
                    Submit
                </button>
            </form>
    </div>
    )

};

export default AuthorForm;