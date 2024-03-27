const React = require('react');
const Layout = require('./Layout');

function ProBook({ login, book }) {
  return (
    <Layout login = {login}>
      <div className="mainContainer">
        <h1>Книжка {book.title}</h1>
        <h1>Автор {book.author}</h1>
        <h1>Описание {book.description}</h1>
        <h1>Выложил: {book.author}</h1>
      </div>
    </Layout>
  );
}

module.exports = ProBook;