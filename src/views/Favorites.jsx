const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ login, favorites }) {
  return (
    <Layout login={login}>

      <div className="upCont">
        {login ? (
          <h1>
            <span id="userName">
              {login}
            </span>
            , Ваш список Избранных книг:
          </h1>
        ) : (
          <h1>Гость, добро пожаловать !</h1>
        )}
      </div>
      <div className="container">
        {favorites.map((el) => (
          <div className="bookContainer">
            <div className={`component${el.Book.id}`}>
              <div className="cardBook">
                <div className="book">
                  <img src={el.Book.img} className="imgCard" alt="img_card" />
                  <div className="titleCard">
                    <div className="up">
                      <div>
                        <h3>{el.author}</h3>
                        <br />
                        <h3>{el.title}</h3>
                      </div>
                      <div className="flag-up" />
                      <a href={`/favorites/add/${el.Book.id}`} className="fav-btn"><img src="/css/image.png" className="fav-img" /></a>
                    </div>
                    <div className="down">
                      <span key={el.Book.id}><a href={`/probook/${el.Book.id}`}>Подробнее</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
