// middleware that adds id from jwt payload and adds it to the request
const jwt = require('jsonwebtoken');
const { JWTSecret } = require('../config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    try {
        if( !token ) res.status(401).json('unauthorized');
        const decoded = jwt.verify(token, JWTSecret);
        // get id from payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json('bad request auth middleware');
    }
}

module.exports = auth;
