const indexRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Home = require("../views/Home");
const Page404 = require("../views/Page404");

indexRouter.get("/", (req, res) => {
  const { login } = req.session;
  renderTemplate(Home, { login }, res);
});

indexRouter.get("/404", (req, res) => {
  const { login } = req.session;
  renderTemplate(Page404, {}, res);
});

module.exports = indexRouter;
