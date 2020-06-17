const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    text: {
        type: String
    }
});

module.exports = Review = mongoose.model('reviews', ReviewSchema);
