const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.get('/login', (req, res) => res.send('login'));

router.get('/register', (req, res) => res.send('register'));

// register route
router.post('/register', (req, res) => {
    // TODO: validate data
const { firstName, lastName, email, password } = req.body;
    // lookup email
User.findOne({ email: email}).then(user => { 
    if(!user) {
        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        // gen salt and hash
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then(user => res.json(user));
            }) 
        })
        console.log(newUser);
    } else {
        res.json("user already exists")
    }
}).catch(error => console.log(error))
    
    // exists throw error

    // doesn't exist save user
});

module.exports = router;