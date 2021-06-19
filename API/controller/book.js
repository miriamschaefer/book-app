'use strict';

const Book = require('../models/book');

function getBook(req, res) {
    let bookId = req.params.id;
    Book.findById(bookId, (err, book) => {
        if (err) return res.status(500).send({message: `error al realizar petición ${req}`});
        if (!book) return res.status(404).send({message: `No existe`});

        res.status(200).send({ book })
    })
}

function getBooks(req, res) {
    Book.find({}, (err, books) => {
        if(err) return res.status(500).send({message: `error al realizar petición ${req}`});
        if(!books) return res.status(404).send({message: 'no existen libros'});
        res.status(200).send({ books });
    })
}

function saveBook(req, res) {
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
}

function updateBook(req, res) {
    let bookId = req.params.id;
    let bodyUpdate = req.body;

    Book.findByIdAndUpdate(bookId, bodyUpdate, (err, updatedBook) => {
        if(err) res.status(500).send({message: 'Error al actualizar el producto'});

        res.status(200).send({ book: updatedBook });
    })
}

function deleteBook(req, res) {
    let bookId = req.params.id;

    Book.findById(bookId, (err, book) => {
        if(err) res.status(500).send({message: 'Error al borrar el producto'});

        book.remove(err => {
            if(err) res.status(500).send({message: 'Error al borrar el libro'})

            res.status(200).send({message: 'Libro eliminado'})
        })
    })
}

module.exports = {
    getBook,
    getBooks,
    deleteBook,
    updateBook,
    saveBook
}