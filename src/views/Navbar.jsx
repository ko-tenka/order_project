const React = require('react');

function Navbar({ login }) {
  return (
    <div className="navbar">
      <img className='wormLogo' src="/img/WORM.PNG" alt="" />
      <a href="/" className="logo">
        Книжный червь
      </a>
      {login ? (
        <nav className="nav">
          <button type="button" className="new-book-btn" id="new-book">
            <a href="/addbook" className="link">
              Добавить книгу
            </a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/fav" className="link">
              Избранное
            </a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/user/logout" className="link btn-slice">
              Выйти
            </a>
          </button>
        </nav>
      ) : (
        <nav className='nav'>
          <button type="submit" className="navBtn">
            <a href="/user/register/" className="link">
              Регистрация
            </a>
          </button>
          <button type="submit" className="navBtn">
            <a href="/user/login" className="link">
              Авторизоваться
            </a>
          </button>
        </nav>
      )}
    </div>
  );
}

module.exports = Navbar;
