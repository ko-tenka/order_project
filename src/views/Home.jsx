const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login, books, ratings}) {
  console.log(books);
  return (
    <Layout login={login}>
      <div className="upCont">
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
        {books.map((el) => (
          <div className="bookContainer">
            <div className={`component${el.id}`}>
              <div className="cardBook">
                <div className="book">
                    <img src={el.img} className="imgCard" alt="Тут ваша картинка 🖼" />
                  <div className="titleCard">
                    <div className="up">
                      <div>
                        <h3>{el.author}</h3>
                        <br />
                        <h3>{el.title}</h3>
                      </div>
                      <div className="flag-up" />
                      <a href={`/favorites/add/${el.id}`} className="fav-btn"><img src="/css/image.png" data-id={el.id} className="fav-img" /></a>
                    </div>
                    <div className="down">
                      <span key={el.id}><a href={`/probook/${el.id}`}>Подробнее</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='rateHome'>
              <h3 className='allRateHome' id={el.id}>{ratings[el.id]}</h3>
              <h3 className='starHome1'>⭐</h3>
            </div>
          </div>
        ))}
      </div>
      <script src="/js/favorite.js" />
    </Layout>
  );
};
