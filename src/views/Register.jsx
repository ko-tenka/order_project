const React = require('react');

 const Layout = require('./Layout');

 module.exports = function Register({ login }) {
   return (
     <Layout >
       <div className='regContainer'>
       <div className="login">
         <h2 className="hTag">Добро пожаловать на страницу регистрации!</h2>

         <form id="regForm"> 

           {/* <label htmlFor="loginInput" className="form-label">Введите логин:</label> */}
           <div><input name="login" type="text" className="form-control" id="loginInput" placeholder="Введите логин" /></div>

           {/* <label htmlFor="phoneInput" className="form-label">Введите ваш номер телефона:</label>
           <input name="phone" type="tel" id="phone" placeholder="Введите номер телефона"></input> */}

           {/* <label htmlFor="emailInput" className="form-label">Введите ваш адрес электронной почты:</label> */}
           <div><input name="email" type="email" className="form-control" id="emailInput" placeholder="Введите e-mail" /></div>

           {/* <label htmlFor="passwordInput" className="form-label">Введите пароль:</label> */}
           <div><input name="password" type="password" className="form-control" id="passwordInput" placeholder="Введите пароль" /></div>

           <button type="submit" className="regBtn">Зарегестрироваться</button>

         </form>

         <img className='worr' src="/img/worr.gif" alt="Тут гифка" />

         <h3 className="regMsg"> </h3>
         <a href="/home" className="homeLink">ВЕРНУТЬСЯ</a>

       </div>
       </div>
       <script defer src="/js/registration.js" />

     </Layout>
   );
 };