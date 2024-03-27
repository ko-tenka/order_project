const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');
const AddBook = require('../views/AddBook');
const { Book } = require('../../db/models');
const ProBook = require('../views/ProBook')
const { Rate} = require('../../db/models');


indexRouter.get(`/probook/:id`, async (req, res) => {
  try {
    const { login } = req.session;
    const book = await Book.findOne({ where: { id: req.params.id } })
    renderTemplate(ProBook, { login, book }, res);
  } catch (error) {
    console.log('ERROR', error);
  }
});











// indexRouter.get('/', async (req, res) => {
//   try {
//     const { login } = req.session;
    
//     const allRate = await Rate.findAll({ raw: true });
//     const book = await Book.findAll({ raw: true });
//     renderTemplate(Home, { login, book, allRate }, res);
//   } catch (error) {
//     console.log('ERROR', error);
//   }
// });

// indexRouter.post('/', async (req, res) => {
//   try {
//     const { login } = req.session;
//     const { book_id } = req.body;

//     const starsRate = await Rate.findAll({
//       attributes: ['stars'],
//       where: { book_id }
//     });
//     const resultOneStar = starsRate.reduce((res, el) => res + el, 0)
//     const book = await Book.findAll({ raw: true });
//     renderTemplate(Home, { login, book, resultOneStar }, res);
//   } catch (error) {
//     console.log('ERROR', error);
//   }
// });

// indexRouter.get('/', async (req, res) => {
//   try {
//     const { login } = req.session;
    
//     const allRate = await Rate.findAll({ raw: true });
//     const book = await Book.findAll({ raw: true });
//     console.log(book)
//     let resultOneStar = 0;
//     if(book.id === allRate.user_id){
//       resultOneStar+=allRate.stars
//     // const resultOneStar = book.reduce((res, el) => res + el.stars, 0)
//     console.log(resultOneStar)
//     }else{
//       console.log('Ошибка', error)
//     }
//     renderTemplate(Home, { login, book, resultOneStar }, res);
//   } catch (error) {
//     console.log('ERROR', error);
//   }
// });
indexRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    
    const allRates = await Rate.findAll({ raw: true });
    const books = await Book.findAll({ raw: true });

    const ratings = {};

    // Вычисляем общий рейтинг для каждой книги
    books.forEach(book => {
      const bookId = book.id;
      const bookRatings = allRates.filter(rate => rate.book_id === bookId);
      const totalStars = bookRatings.reduce((total, rate) => total + rate.stars, 0);
      if(totalStars === 0){
        ratings[bookId]=0
      }else{
      ratings[bookId] = (totalStars / bookRatings.length).toFixed(1); 
    }
    });
    console.log(ratings)
    // Передаем результаты рендеринга шаблону
    renderTemplate(Home, { login, books, ratings }, res);
    

  } catch (error) {
    console.log('ERROR', error);
    res.status(500).send('Internal Server Error');
  }});

















indexRouter.get('/404', (req, res) => {
  const { login } = req.session;
  renderTemplate(Page404, {}, res);
});

indexRouter.get('/addbook', (req, res) => {
  const { login } = req.session;
  renderTemplate(AddBook, { login }, res);
});

module.exports = indexRouter;
