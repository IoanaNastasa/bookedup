const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    cover: {
        type: String
    },
    genre: {
        type: String
    }
});

module.exports = Book = mongoose.model('books', BookSchema);
