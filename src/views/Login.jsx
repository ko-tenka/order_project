const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({ login }) {
  return (
    <Layout>
      <div className="login">
        <h2 className="hTag">Пожалуйста, введите свои данные для входа в аккаунт:</h2>

        <form id="loginForm">
          {/* <label htmlFor="emailInput" className="form-label">Адрес электронной почты:</label> */}
          <div><input name="email" type="text" className="form-control" autoComplete="off" id="emailInput" placeholder="Почта*" /></div>

          {/* <label htmlFor="numberInput" className="form-label">Номер телефона:</label>
            <input name="number" type="text" className="form-control" autoComplete="off" id="numberInput" placeholder="+7(999) 123-23-23*"/> */}

          {/* <input name="email" type="text" className="form-control" id="emailInput" placeholder="Введите адрес электронной почты" /> */}
          {/* <label htmlFor="passwordInput" className="form-label">Пароль:</label> */}
          <div><input name="password" type="password" className="form-control" id="passwordInput" placeholder="Введите пароль" /></div>
          <button type="submit" className="logBtn">Войти</button>
        </form>
        <h3 className="logMsg"> </h3>
        <a href="/home" className="homeLink">ВЕРНУТЬСЯ</a>
      </div>
      <script defer src="/js/login.js" />
    </Layout>
  );
};
