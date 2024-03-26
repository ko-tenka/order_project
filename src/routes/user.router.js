const bcrypt = require("bcrypt");

const userRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Register = require("../views/Register");
const Login = require("../views/Login");

const { checkUser } = require("../middlewares/common");

const { User } = require("../../db/models");

userRouter.get("/register", (req, res) => {
  const { login } = req.session;
  renderTemplate(Register, { login }, res);
});

userRouter.post("/register", async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res
        .status(401)
        .json({ err: `Пользователь с почтой ${email} уже существует` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.status(200).json({ regDone: "Новый профиль успешно создан" });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("cookieName");
    res.redirect("/");
  });
});

userRouter.get("/login", (req, res) => {
  const { login } = req.session;
  renderTemplate(Login, { login }, res);
});

userRouter.post("/login", async (req, res) => {
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
        req.session.login = user.email;
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
