const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ login, favorites }) {
  console.log(favorites[0].Book.dataValues);
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
        {favorites?.map((el) => (
          <div className="bookContainer">
            <div className={`component${el.Book.dataValues.id}`}>
              <div className="cardBook">
                <div className="book">
                  <img src={el.Book.dataValues.img} className="imgCard" alt="img_card" />
                  <div className="titleCard">
                    <div className="up">
                      <div>
                        <h3>{el.Book.dataValues.author}</h3>
                        <br />
                        <h3>{el.Book.dataValues.title}</h3>
                      </div>
                      <div className="flag-up" />
                      <a href={`/favorites/add/${el.Book.dataValues.id}`} className="fav-btn"><img src="/css/image.png" className="fav-img" /></a>
                    </div>
                    <div className="down">
                      <span key={el.Book.dataValues.id}><a href={`/probook/${el.Book.dataValues.id}`}>Подробнее</a></span>
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
