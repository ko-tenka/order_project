const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');
const AddBook = require('../views/AddBook');
const { Book } = require('../../db/models');
const ProBook = require('../views/ProBook');

indexRouter.get('/probook/:id', async (req, res) => {
  try {
    const { login } = req.session;
    const book = await Book.findOne({ where: { id: req.params.id } });
    renderTemplate(ProBook, { login, book }, res);
  } catch (error) {
    console.log('ERROR', error);
  }
});

indexRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    const book = await Book.findAll({ raw: true });
    renderTemplate(Home, { login, book }, res);
  } catch (error) {
    console.log('ERROR', error);
  }
});

indexRouter.get('/404', (req, res) => {
  const { login } = req.session;
  renderTemplate(Page404, {}, res);
});

indexRouter.get('/addbook', (req, res) => {
  const { login } = req.session;
  renderTemplate(AddBook, { login }, res);
});

module.exports = indexRouter;
