'use strict';

const mongoose = require('mongoose');
const Book = require('./book');
const Schema = mongoose.Schema;

const AuthorSchema = Schema({
    first_name: String,
    last_name: String,
});

AuthorSchema.virtual('Book', {
    ref: Book.modelName,
    localField: '_id',
    foreignField: 'Author'
});

module.exports = mongoose.model('Author', AuthorSchema);
