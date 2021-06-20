import React from 'react';
import AuthorForm from '../Forms/AuthorForm';
import { useParams } from 'react-router-dom';

const EditAuthor = ({ history, setAuthors, authors }) => {

    const { id } = useParams();

    const authorToEdit = authors.find((author) => JSON.stringify(author.id) === JSON.stringify(id));

    const handleSubmitAuthor = (author) => {
        const filteredAuthors = authors.filter((author) => JSON.stringify(author.id) !== JSON.stringify(id));
        setAuthors([author, ...filteredAuthors]);
        history.push('/authors');
  };
  return (
        <div>
            <AuthorForm author={authorToEdit} handleSubmitAuthor={handleSubmitAuthor} />
        </div>
  );

}

export default EditAuthor;