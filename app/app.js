const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Book = require('./Book.model');

const db = 'mongodb://localhost/exapmle';

const app = express();

mongoose.connect(db, { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send('happy to be here');
});

app.get('/books', (req, res) => {
    console.log('getting all books');
    Book.find({})
    // err - error, books - response
    .exec((err, books) => {
        if(err) {
            res.send('error');
        } else {
            console.log(books);
            res.json(books);
        }
    })
})

app.get('/books/:id', (req, res) => {
    console.log('getting one book');
    Book.findOne({
        // 'req.params.id' to id danej książki. Nie musimy tu wpisywać "5c1282a9ceb57e359697915a"
        _id: req.params.id
    })
    .exec((err, book) => {
        if (err) {
           res.send('error occured');
        } else {
            console.log(book);
            res.json(book);
        }
    })
})

const port = 8080;

app.listen(port, () => {
   console.log('app listeining on port '+port);
});