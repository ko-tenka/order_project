const bcrypt = require('bcrypt');

const userRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Register = require("../views/Register");
const Login = require("../views/Login");
const nodemailer = require("nodemailer");

const { checkUser } = require('../middlewares/common');

const { User } = require('../../db/models');

userRouter.get('/register', (req, res) => {
  const { login } = req.session;
  renderTemplate(Register, { login }, res);
});

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true, // Use true for port 465, false for all other ports
  auth: {
    user: "emailtest00@mail.ru",
    pass: "reswEbGKHAeaript8jxe",
  },
});
async function main(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "emailtest00@mail.ru", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Вы зарегестрировались на червечке!", // plain text body
    html: "<b>Вы зарегестрировались на червечке!</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

userRouter.post("/register", async (req, res) => {
  try {
    const { login, password, email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res
        .status(401)
        .json({ err: `Пользователь с почтой ${email} уже существует` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      await main(email);
      console.log("Email sent successfully to:", email);
      req.session.login = newUser.login;
      req.session.save(() => {
        res.status(200).json({ regDone: 'Новый профиль успешно создан' });
      });
    }
  } catch (error) {
    console.log(error);
    res.send('Ошибочка!')
  }
});

userRouter.get('/logout', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

userRouter.get('/login', (req, res) => {
  const { login } = req.session;
  renderTemplate(Login, { login }, res);
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res
        .status(401)
        .json({ err: `Пользователь с почтой ${email} не найден!` });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.save(() => {
          res
            .status(200)
            .json({ logDone: `Пользователь с почтой ${email} вошёл!` });
        });
      } else {
        res.status(401).json({ wrongPass: true });
      }
    }
  } catch (error) {
    console.log(`loginRouter => ${error}`);
  }
});

module.exports = userRouter;
