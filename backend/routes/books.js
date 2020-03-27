const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');
router.use(auth).get('/', (req, res) => {
    // console.log(req.cookies['jwt']);
    Book.find({}, function(error, books) { if(error) {res.send(error)}; res.json(books)});
});

module.exports = router;
