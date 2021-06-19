import '../stylesheets/App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import booksFromApi from '../data/books.json';
import authorsFromApi from '../data/authors.json'
import AuthorsList from './Author/AuthorsList';
import BookList from './Book/BookList';
import BookDetail from './Book/BookDetail';
import AuthorDetail from './Author/AuthorDetail';
import Main from './Layout/Main';


function App() {

  const [books, setBooks] = useState ([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
      setBooks(booksFromApi.books);
      setAuthors(authorsFromApi.authors);
  }, [books, authors]);

  const renderBook = (props) => {
  const routeId = parseInt(props.match.params.id);
  const book = books.find((book) => book.id === routeId);

    if(book) {
      return(
        <BookDetail
          id={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          books={books}
        />
      )
    } else {
      return ("Error")
    }
  }

  const renderAuthor = (props) => {
    const routeId = parseInt(props.match.params.id);
    const author = authors.find((author) => author.id === routeId);

    if(author) {
      return(
        <AuthorDetail
          id={author.id}
          first_name={author.first_name}
          last_name={author.last_name}
          books={books}
        />
      )
    } else {
      return ("Error")
    }
  }

  return (
    <div className="App">
          <Switch>
              <Route exact path="/">
                <Main />
              </Route>

              <Route exact path="/authors" >
                <AuthorsList authors={authors}/>
              </Route>

              <Route exact path="/books">
                <BookList books={books} />
              </Route>

              <Route exact path="/books/:id" component={renderBook}/>

              <Route exact path="/authors/:id" component={renderAuthor}/>
          </Switch>
    </div>
  );
}

export default App;
