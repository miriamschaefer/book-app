import React, { useState }from 'react';
import Header from '../Layout/Header';
import BackLink from '../Layout/BackLink';

const AuthorForm = (props) => {
  
    const [author, setAuthor] = useState({
        first_name: props.author ? props.author.first_name : '',
        last_name: props.author ? props.author.last_name : ''
    });

    const [error, setError] = useState('');
    const { first_name, last_name} = author;

    const handleSubmitAuthor = (ev) => {
        ev.preventDefault();

        const values = [first_name, last_name];
        let error = '';

        const completedForm = values.every((field) => {
            return field !== '';
          });

          var idLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          var newId = idLetter + Date.now();

       if (completedForm){
            const author = {
                id: newId,
                first_name,
                last_name
        };
        props.handleSubmitAuthor(author)

    } else {
        error = '* Rellena todos los campos';
    }
        setError(error);
    }

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setAuthor((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    return(
        <>
        <Header />
        <main className="form">
          <BackLink />

        <form onSubmit={handleSubmitAuthor} className="form__elements">
            <div className="form__elements-group">
                <label htmlFor="first_name">Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    className="form__elements-group-input"
                    placeholder="Name"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form__elements-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    placeholder="Last Name"
                    className="form__elements-group-input"
                    onChange={handleInputChange}
                />
            </div>
                <button type="submit" className="form__elements-btn">
                    Submit
                </button>
            </form>
            {error && <p className="">{error}</p>}
        </main>
    </>
    )

};

export default AuthorForm;