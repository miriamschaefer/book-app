'use strict';

const express = require('express');
const bookCtrl = require('../controller/book');
const authorCtrl = require('../controller/author');
const api = express.Router();


//GETS ALL ITEMS IN DB
api.get('/books', bookCtrl.getBooks);
api.get('/authors', authorCtrl.getAuthors);

//RETURNS CERTAIN ITEM BY ID
api.get('/books/:id', bookCtrl.getBook);
api.get('/authors/:id', authorCtrl.getAuthor);

//ADDS ITEM
api.post('/books', bookCtrl.saveBook);
api.post('/authors', authorCtrl.saveAuthors);

//DELETE ITEM IN OUR DB
api.delete('/books/:id', bookCtrl.deleteBook);
api.delete('/authors/:id', authorCtrl.deleteAuthor);

//UPDATE ITEM IN OUR DB
api.put('/books/:id', bookCtrl.updateBook);
api.put('/authors/:id', authorCtrl.updateAuthor);


module.exports = api;