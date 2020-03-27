const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
const { db } = require('./config');
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(cookieParser());
app.use(express.json());
app.use('/books', require('./routes/books'));
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server listening on port' + port));
