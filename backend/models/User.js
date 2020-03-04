const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    wantToReadList: {
        type: Array
    },
    readList: {
        type: Array
    }
});

module.exports = User = mongoose.model('users', UserSchema);
