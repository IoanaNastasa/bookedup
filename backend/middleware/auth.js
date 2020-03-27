// middleware that adds id from jwt payload and adds it to the request
const jwt = require('jsonwebtoken');
const { JWTSecret } = require('../config');
// checks if token is ok
function auth(req, res, next) {
    const token = req.cookies['jwt'];
    try {
        if( !token ) return res.status(401).json('unauthorized');
        const decoded = jwt.verify(token, JWTSecret);
        // get id from payload
        req.user = decoded;
        next();
    } catch(e) {
        return res.status(400).json('bad request auth middleware');
    }
}

module.exports = auth;
