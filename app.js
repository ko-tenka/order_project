require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const bodyParser = require('body-parser');
const userRouter = require('./src/routes/user.router');
const indexRouter = require('./src/routes/index.router');
const apiRouter = require('./src/routes/apiRouter');
const favoriteRouter = require('./src/routes/favorite.router');
const addBook = require('./src/routes/addBook.router');
const { checkUser } = require('./src/middlewares/common')

// const dbConnectionCheck = require("./db/dbConnectCheck");
// const { checkUser  } = require("./src/middlewares/common");

const app = express();

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Subs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60, // время жизни в ms, 24(h)*1000(ms)*60(sec)*60(min) = 86400000
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
// dbConnectionCheck();

app.use('/user', userRouter);
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/favorites', checkUser, favoriteRouter);
app.use('/addbook', checkUser, addBook);

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`Server listening at localhost:${this.address().port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
const mailer = require('./public/js/nodemailer');
const AddBook = require('./src/views/AddBook');

app.post('/user/register', (req, res) => {
  const message = {
    to: req.body.email,
    subject: 'Congratulations! You are successfully registred on our site',
    text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
  
  данные вашей учетной записи:
  login: ${req.body.email}
  password: ${req.body.pass}
  
  Данное письмо не требует ответа.`,
  };
  mailer(message);
  user = req.body;
  res.redirect('/registration');
});
