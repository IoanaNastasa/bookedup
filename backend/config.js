const dotenv = require('dotenv');
dotenv.config();
module.exports= {
    db: process.env.MONGO_URI,
    JWTSecret: process.env.JWT_SECRET
};
