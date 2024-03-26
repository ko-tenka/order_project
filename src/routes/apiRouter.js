const router = require('express').Router();
const addBook = require('./addBook.router');

module.exports = router.use('/tasks', addBook);
