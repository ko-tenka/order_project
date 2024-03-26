const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({ login }) {
  return (
    <Layout>
      <div className="login">
        <h2 className="hTag">Пожалуйста, введите свои данные для входа в аккаунт:</h2>

        <form id="loginForm">
          <label htmlFor="emailInput" className="form-label">Адрес электронной почты:</label>
          <input name="email" type="text" className="form-control" id="emailInput" placeholder="Введите адрес электронной почты" />
          <label htmlFor="passwordInput" className="form-label">Пароль:</label>
          <input name="password" type="password" className="form-control" id="passwordInput" placeholder="введите пароль" />
          <button type="submit" className="logBtn">Авторизоваться</button>
        </form>

        <h3 className="logMsg">...</h3>
      </div>
      <script defer src="/js/login.js" />
    </Layout>
  );
};