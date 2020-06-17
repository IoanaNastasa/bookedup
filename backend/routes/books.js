const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');
router.get('/', (req, res) => {
    Book.find({}, function(error, books) {
        if(error) {
            res.send(error)
        };
        res.json(books)
    });
});

router.get('/:id', (req, res) => {
    Book.findOne({ _id: req.params.id }, function(error, book) { 
        if(error) {
            res.send(error)
        };
        res.json(book)
    });
});

module.exports = router;
