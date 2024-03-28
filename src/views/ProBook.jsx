const React = require('react');
const Layout = require('./Layout');

function ProBook({ login, book }) {
  console.log(book)
  return (
    <Layout login = {login}>
      <div className="mainContainer">
        <h1>Книжка {book.title}</h1>
        <img src= {book.img} alt="Тут ваша обложка" />
        <h1>Автор {book.author}</h1>
        <h1>Описание {book.description}</h1>
        <h1>Выложил: {login}</h1>
      </div>

      <div className='rating' id ={book.id}>

       <h1 className='star1' id = '1'>⭐</h1>
       <h1 className='star2' id = '2'>⭐</h1>
       <h1 className='star3' id = '3'>⭐</h1>
       <h1 className='star4' id = '4'>⭐</h1>
       <h1 className='star5' id = '5'>⭐</h1>
       <div className='starMsg'>...</div>
        
      </div>
      <script defer src="/js/rate.js" />
    </Layout>
  );
}

module.exports = ProBook;