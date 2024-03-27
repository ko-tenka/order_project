const router = require('express').Router();
const addBook = require('./addBook.router');
const rate = require('./rate.router')
// const allRate = require('./allRate.router')

router.use('/tasks', addBook);
router.use('/probook', rate);
// router.use('/home', allRate)

module.exports = router;
