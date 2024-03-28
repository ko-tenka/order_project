const React = require('react');
const Layout = require('./Layout');

function ProBook({ login, book }) {
  console.log(book)
  return (

    <Layout login={login}>
      <div className="proBookContainer">
        <div className='title-pro-book'>
          <div className="imgCardProBook">
            <img src={book.img} alt="img_card" />

   // <Layout login = {login}>
   //   <div className="mainContainer">
   //     <h1>Книжка {book.title}</h1>
   //     <img src= {book.img} alt="Тут ваша обложка" />
   //     <h1>Автор {book.author}</h1>
   //     <h1>Описание {book.description}</h1>
   //     <h1>Выложил: {login}</h1>
   //   </div>

            <div className='rating' id ={book.id}>
              <h1 className='star1' id = '1'>⭐</h1>
              <h1 className='star2' id = '2'>⭐</h1>
              <h1 className='star3' id = '3'>⭐</h1>
              <h1 className='star4' id = '4'>⭐</h1>
              <h1 className='star5' id = '5'>⭐</h1>
            </div>
          </div>


          <div className='title-proBook'>
            <div><h1>Книжка: {book.title}</h1></div>
            <div><h1>Автор: {book.author}</h1></div>
            <div><h1>Описание: {book.description}</h1></div>
        {/* <h1>Автор: {book.author}</h1>
        <h1>Описание: {book.description}</h1>
        <h1>Выложил: {book.author}</h1> */}
          </div>
      </div>
      <div className='reklama'><h1>РЕКЛАМА</h1></div>
      </div>
      <br />
      <hr />
      <br />
      <div className='cha-1t'>
        <h1>CHAT</h1>
        <div className='chat-2'>
          {/* <form id="chatForm"> 
            <div><input name="chat" type="text" className="form-control" id="chatInput" placeholder="Введите chat" /></div>
            <button type="submit" className="chatBtn">Отправить</button>
          </form> */}
        </div>

  //     <h1 className='star1' id = '1'>⭐</h1>
  //     <h1 className='star2' id = '2'>⭐</h1>
  //     <h1 className='star3' id = '3'>⭐</h1>
  //     <h1 className='star4' id = '4'>⭐</h1>
  //    <h1 className='star5' id = '5'>⭐</h1>
  //     <div className='starMsg'>...</div>
        

      </div>
      <script defer src="/js/rate.js" />
    </Layout>
  );
}

module.exports = ProBook;