const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
    Review.find({}, function(error, reviews) {
        if(error) {
            res.send(error)
        };
        res.json(reviews);
    });
});

router.post('/', (req, res) => {
    const newReview = new Review({
        userId: req.body.userId,
        bookId: req.body.bookId,
        rating: req.body.rating,
        text: req.body.text
    })
    Review.countDocuments({userId: req.body.userId, bookId: req.body.bookId}, (error, count) => {
        if (error) {
           res.send(error); 
        };
        if (count >= 1) {
            res.send("A review from this user on this book already exists.")
        }
        if (count === 0) {
            newReview.save({}, (error, review) => {
                if(error) {
                    res.send(error);
                };
                res.json(review);
            })
        }
    })
});

router.get('/book/:bookId', (req, res) => {
    Review.find({ bookId: req.params.bookId }, function(error, reviews) {
        console.log(req.params.bookId)
        if(error) {
            res.send(error)
        };
        res.json(reviews)
    });
});

module.exports = router;
