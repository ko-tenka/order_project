const React = require('react');
const Layout = require('./Layout');

function ProBook({ login, book, comments }) {
  return (
    <Layout login={login}>
      <div className="proBookContainer">
        <div className="title-pro-book">
          <div className="imgCardProBook">
            <img src={book.img} alt="img_card" />
            </div>

            {/* <div className='rating' id ={book.id}> */}
              {/* <h1 className='star1' id = '1'>⭐</h1> */}
              {/* <h1 className='star11' id = '1'>⭐</h1> */}
              {/* <h1 className='star2' id = '2'>⭐</h1> */}
              {/* <h1 className='star22' id = '2'>⭐</h1> */}
              {/* <h1 className='star3' id = '3'>⭐</h1> */}
              {/* <h1 className='star33' id = '3'>⭐</h1> */}
              {/* <h1 className='star4' id = '4'>⭐</h1> */}
              {/* <h1 className='star44' id = '4'>⭐</h1> */}
              {/* <h1 className='star5' id = '5'>⭐</h1> */}
              {/* <h1 className='star55' id = '5'>⭐</h1> */}
              {/* <div className='starMsg'>...</div>
            </div>
          </div>  */}


          <div className="imgCardProBookStars">
            <div className='rating' id ={book.id}>
              <h1><img className='starNone2' src="/css/star2.png" alt="⭐" /></h1>
              <h1 className='star1' id = '1'><img className='star starNone starNone1' src="/css/star1.png" alt="⭐" /></h1>
              <h1><img className='starNone2' src="/css/star2.png" alt="⭐" /></h1>
              <h1 className='star2' id = '2'><img className='star starNone starNone1' src="/css/star1.png" alt="⭐" /></h1>
              <h1><img className='starNone2' src="/css/star2.png" alt="⭐" /></h1>
              <h1 className='star3' id = '3'><img className='star starNone starNone1' src="/css/star1.png" alt="⭐" /></h1>
              <h1><img className='starNone2' src="/css/star2.png" alt="⭐" /></h1>
              <h1 className='star4' id = '4'><img className='star starNone starNone1' src="/css/star1.png" alt="⭐" /></h1>
              <h1><img className='starNone2' src="/css/star2.png" alt="⭐" /></h1>
              <h1 className='star5' id = '5'><img className='star starNone starNone1' src="/css/star1.png" alt="⭐" /></h1>

            <div className='starMsg'>...</div>
          
            </div>
          </div>
          <div className="title-proBook">
            <div>
              <h1>
                Книжка:
                {book.title}
              </h1>
            </div>
            <div>
              <h1>
                Автор:
                {book.author}
              </h1>
            </div>
            <div>
              <h1>
                Описание:
                {book.description}
              </h1>
            </div>
          </div>
        </div>
        <div className="reklama"><h1>РЕКЛАМА</h1></div>
      </div>
      <br />
      <hr />
      <br />
      <div className="cha-1t">
        <h1>CHAT</h1>
        <div className="chat-2">
          <form className="chatForm" id={book.id}>
            <div><input name="chat" type="text" className="form-control" id="chatInput" placeholder="Введите chat" /></div>
            <button type="submit" className="chatBtn">Отправить</button>
          </form>
        </div>
        <div className="chatContainer">
          <h1>chat</h1>
          <div className="allChat">
            {comments.map((el) => (
              <div style={{ width: '300px', border: '2px solid black', margin: '3px' }}>
                <h3>
                  Кто опубликовал:
                  {login}
                </h3>
                <br />
                <div style={{ width: '100px', margin: '3px' }}>
                  <h3>{el.comment}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <script defer src="/js/rate.js" />
      <script defer src="/js/chat.js" />
    </Layout>
  );
}

module.exports = ProBook;
