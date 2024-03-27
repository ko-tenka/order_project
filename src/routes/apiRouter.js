const router = require('express').Router();
const addBook = require('./addBook.router');
const rate = require('./rate.router')

router.use('/tasks', addBook);
router.use('/probook', rate);

module.exports = router;
