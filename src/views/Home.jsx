const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login, book }) {
  console.log(book);
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
        {book.map((el) => (
          <div className="bookContainer">
            <div className={`component${el.id}`}>
              {/* <h3>
              {el.title}
              {el.description}
              {el.author}
              {el.user_id}
              Избранное

            </h3> */}

              <div className="cardBook">
                <div className="book">
                  <div className="imgCard">
                    <img src={el.img} alt="img_card" />
                  </div>
                  <div className="titleCard">
                    <div className="up">
                      <div>
                        <h3>{el.author}</h3>
                        <br />
                        <h3>{el.title}</h3>
                      </div>
                      <div className="flag-up" />
                      <a href={`/favorites/add/${el.id}`} className="fav-btn"><img src="/css/image.png" className="fav-img" /></a>
                    </div>
                    <div className="down">
                      <span key={el.id}><a href={`/probook/${el.id}`}>Подробнее</a></span>
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
