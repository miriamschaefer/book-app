'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//START DATABASE
var mongoDB = 'mongodb://localhost/books';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

// CONNECTING AND BINDING TO ERROR
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Book = require('./models/book');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/books', (req, res) => {
    Book.find({}, (err, books) => {
        if(err) return res.status(500).send({message: `error al realizar petición ${req}`});
        if(!books) return res.status(404).send({message: 'no existen libros'});
        res.send(200, { books });
    })
})

app.get('/books/:id', (req, res) => {
    let bookId = req.params.id;
    Book.findById(bookId, (err, book) => {
        if (err) return res.status(500).send({message: `error al realizar petición ${req}`});
        if (!book) return res.status(404).send({message: `No existe`});

        res.status(200).send({ book })
    })
})

app.post('/books', (req, res) => {
    console.log('POST /books')
    console.log(req.body);

    let book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;

    book.save((err, savedBook) => {
        if(err) res.status(500).send({ message: `Error al salvar en BD: ${err}`});

        res.status(200).send({book: savedBook});
    }
    )
});

app.delete('/books/:id', (req, res) => {
    let bookId = req.params.id;

    Book.findById(bookId, (err, book) => {
        if(err) res.status(500).send({message: 'Error al borrar el producto'});

        book.remove(err => {
            if(err) res.status(500).send({message: 'Error al borrar el libro'})

            res.status(200).send({message: 'Libro eliminado'})
        })
    })
})

app.put('books/:id', (req, res) => {
    let bookId = req.params.id;
    let bodyUpdate = req.body;

    Book.findByIdAndUpdate(bookId, bodyUpdate, (err, updatedBook) => {
        if(err) res.status(500).send({message: 'Error al actualizar el producto'});

        res.status(200).send({ book: updatedBook });
    })
})

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})