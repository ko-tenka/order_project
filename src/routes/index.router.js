const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');
const AddBook = require('../views/AddBook');
const { Book, Izbrannoe } = require('../../db/models');
const ProBook = require('../views/ProBook');
const Favorites = require('../views/Favorites');
const { Rate, Comment } = require('../../db/models');

indexRouter.get('/probook/:id', async (req, res) => {
  try {
    const { login } = req.session;
    const book = await Book.findOne({ where: { id: req.params.id } });
    const comments = await Comment.findAll({ where: { book_id: req.params.id } });
    // console.log('не наход? ------------', book);
    renderTemplate(ProBook, { login, book, comments }, res);
  } catch (error) {
    console.log('ERROR', error);
  }
});

indexRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;

    const allRates = await Rate.findAll({ raw: true });
    const books = await Book.findAll({ raw: true });

    const ratings = {};

    // Вычисляем общий рейтинг для каждой книги
    books.forEach((book) => {
      const bookId = book.id;
      const bookRatings = allRates.filter((rate) => rate.book_id === bookId);
      const totalStars = bookRatings.reduce((total, rate) => total + rate.stars, 0);
      if (totalStars === 0) {
        ratings[bookId] = 0;
      } else {
        ratings[bookId] = (totalStars / bookRatings.length).toFixed(1);
      }
    });
    console.log(ratings);
    // Передаем результаты рендеринга шаблону
    renderTemplate(Home, { login, books, ratings }, res);
  } catch (error) {
    console.log('ERROR', error);
    res.status(500).send('Internal Server Error');
  }
});

indexRouter.get('/404', (req, res) => {
  const { login } = req.session;
  renderTemplate(Page404, { login }, res);
});

indexRouter.get('/addbook', (req, res) => {
  const { login } = req.session;
  renderTemplate(AddBook, { login }, res);
});

indexRouter.get('/fav', async (req, res) => {
  const { login } = req.session;
  const user_id = req.session.userId.id;
  const book = await Izbrannoe.findAll({
    attributes: ['book_id'],
    where: { user_id },
  });
  console.log('уже ТТУУУт', book);
  renderTemplate(Favorites, { login, book }, res);
});

module.exports = indexRouter;
