const React = require('react');

 function Navbar({ login }) {
   return (
     <div className="navbar">
       <h1 className="logo">Название проекта</h1>
       {login ? (
         <nav className="nav">
           <button type="submit" className="navBtn">
             <a href="/" className="link">На главную</a>
           </button>
           <button type="submit" className="navBtn">
             <a href="/user/account" className="link">Личный кабинет</a>
           </button>
           <button type="submit" className="navBtn">
             <a href="/user/logout" className="link">Выйти</a>
           </button>
         </nav>
       ) : (
         <nav>
           <button type="submit" className="navBtn">
             <a href="/" className="link">На главную</a>
           </button>
           <button type="submit" className="navBtn">
             <a href="/user/register/" className="link">Регистрация</a>
           </button>
           <button type="submit" className="navBtn">
             <a href="/user/login" className="link">Авторизоваться</a>
           </button>
         </nav>
       )}
     </div>
   );
 }

 module.exports = Navbar;