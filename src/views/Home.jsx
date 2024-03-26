const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login, book }) {
  console.log(book);
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
        {book.map((el) => (
          <div className={`component${el.id}`}>
            <h3>
              {el.title}
              {el.description}
              {el.author}
              {el.img}
              {el.user_id}
              Избранное
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  );
};
