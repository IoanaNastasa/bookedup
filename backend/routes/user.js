const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { JWTSecret } = require('../config');
const jwt = require('jsonwebtoken');
router.get('/login', (req, res) => res.send('login'));

router.get('/register', (req, res) => res.send('register'));

// register route
router.post('/register', (req, res) => {
    // TODO: validate data
    const { firstName, lastName, email, password } = req.body;
    User.findOne({ email: email }).then(user => {
        if (!user) {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            // gen salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        jwt.sign(
                            { id: user.id },
                            JWTSecret,
                            { expiresIn: 7200 },
                            (err, token) => {
                                if (err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        email: user.email,
                                        firstName: user.firstName,
                                        lastName: user.lastName
                                    }
                                })
                            })
                    });
                })
            })
            console.log(newUser);
        } else {
            res.json("user already exists")
        }
    }).catch(error => console.log(error))
});

// login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // validate data, solve 
    User.findOne({ email: email }).then(user => {
        if(!user) res.json('user doesn\'t exist');

        // check if password is correct
        bcrypt.compare(password, user.password).then(isMatch => {
            if( !isMatch ) res.json('wrong password');
            jwt.sign(
                { id: user.id},
                JWTSecret,
                { expiresIn: 7200 },
                (err, token) => {
                    if( err ) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        }
                    })
                }
            )
        })
    })
})

// TODO: Add put routes to edit want to read and read titles

module.exports = router;