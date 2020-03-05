const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', (req, res) => {
    Book.find({}, function(error, books) { if(error) {res.send(error)}; res.json(books)});
});

module.exports = router;
