const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const { db } = require('./config');
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));
app.use(express.json());
app.use('/books', require('./routes/books'));
app.use('/users', require('./routes/user'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server listening on port' + port));
