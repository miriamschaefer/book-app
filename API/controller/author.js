'use strict';

const Author = require('../models/author');

function getAuthor(req, res) {
    let authorId = req.params.id;
    Author.findById(authorId, (err, author) => {
        if (err) return res.status(500).send({message: `Error al realizar petición ${req}`});
        if (!author) return res.status(404).send({message: `No existe`});

        res.status(200).send({ author })
    })
}

function getAuthors(req, res) {
    Author.find({}, (err, authors) => {
        if(err) return res.status(500).send({message: `error al realizar petición ${req}`});
        if(!authors) return res.status(404).send({message: 'no existen autores'});
        res.status(200).send({ authors });
    })
}

function saveAuthors(req, res) {
    console.log('POST /authors')
    console.log(req.body);

    let author = new Author();
    author.title = req.body.first_name;
    author.author = req.body.last_name;

    author.save((err, savedAuthor) => {
        if(err) res.status(500).send({ message: `Error al salvar en BD: ${err}`});

        res.status(200).send({author: savedAuthor});
    }
    )
}

function updateAuthor(req, res) {
    let authorId = req.params.id;
    let bodyUpdate = req.body;

    Author.findByIdAndUpdate(authorId, bodyUpdate, (err, updatedAuthor) => {
        if(err) res.status(500).send({message: 'Error al actualizar el autor'});

        res.status(200).send({ author: updatedAuthor });
    })
}

function deleteAuthor(req, res) {
    let authorId = req.params.id;

    Author.findById(authorId, (err, author) => {
        if(err) res.status(500).send({message: 'Error al borrar el autor'});

        author.remove(err => {
            if(err) res.status(500).send({message: 'Error al borrar el autor'})
            res.status(200).send({message: 'Autor eliminado'})
        })
    })
}

module.exports = {
    getAuthor,
    getAuthors,
    deleteAuthor,
    updateAuthor,
    saveAuthors
}