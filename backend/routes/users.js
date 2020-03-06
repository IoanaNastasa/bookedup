const express = require('express');
const router = express.Router();
const User = require('../models/User');

// adds books to wanttoread and read
router.put('/:userID', (req, res) => {
    const userID = req.params.userID;
    if(req.body.read) {
        // update readList
        User.findByIdAndUpdate(userID, { $push: { readList: req.body.read }}, function(err, user) {
            if(err) res.send('error');
            res.send(user);
        });
    }
    if(req.body.wantToRead) {
        // update wantToReadList
        User.findByIdAndUpdate(userID, { $push: { wantToReadList: req.body.wantToRead }}, function(err, user) {
            if(err) res.send('error');
            res.send(user);
        });
    }
});

// lets user remove books from read and want to read
// get book id from 

module.exports = router;
