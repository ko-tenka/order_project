const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ login, book }) {
  console.log(book);
  return (
    <Layout login={login}>

      <div className='upCont'>
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
      <div className="container">
        {book.map((el) => (
          <div className="bookContainer">
            <div className={`component${el.id}`}>

              <div className="cardBook">
                <div className="book">
                    <img src={el.img} className="imgCard" alt="img_card" />
                  <div className="titleCard">
                    <div><h3>{el.title}</h3></div>
                    <div><h3>{el.description}</h3></div>
                    <div><h3>{el.author}</h3></div>
                  </div>
                </div>
              </div>

            </div>

              <li key={el.id}><a href={`/probook/`+el.id}>Подробнее</a></li>

            <a href={ '/favorites/add/' + el.id } className="fav-btn"><img src="/css/image.png" data-id={el.id} className="fav-img" /></a>
            <a href={ '/favorites/add/' + el.id } className="fav-btn"><img src="/css/imageBlack.png" className="fav-imgBlack" /></a>

          </div>
        ))}
      </div>
    </Layout>
  );
};
