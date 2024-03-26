const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div className="container">
        {login ? (
          <h1>
            <span id="userName">
              {login}
            </span>
            , добро пожаловать !
          </h1>
        ) : (
          <h1>Гость, добро пожаловать !</h1>
        )}
      </div>
    </Layout>
  );
};
