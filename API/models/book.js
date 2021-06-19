'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = Schema({
    title: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    isbn: String,
})

module.exports = mongoose.model('Book', BookSchema);
