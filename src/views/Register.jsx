const React = require('react');

 const Layout = require('./Layout');

 module.exports = function Register({ login }) {
   return (
     <Layout >
       <div className='container'>
       <div className="login">
         <h2>Добро пожаловать на страницу регистрации!</h2>

         <form id="regForm"> 

           <label htmlFor="emailInput" className="form-label">Введите логин:</label>
           <input name="login" type="text" className="form-control" id="loginInput" placeholder="Введите логин" />

           <label htmlFor="emailInput" className="form-label">Введите ваш адрес электронной почты:</label>
           <input name="email" type="text" className="form-control" id="emailInput" placeholder="Введите действующий e-mail" />

           <label htmlFor="passwordInput" className="form-label">Введите пароль:</label>
           <input name="password" type="password" className="form-control" id="passwordInput" placeholder="Введите пароль" />

           <button type="submit" className="regBtn">Зарегестрировать аккаунт</button>

         </form>

         <h3 className="regMsg">...</h3>
       </div>
       </div>
       <script defer src="/js/registration.js" />

     </Layout>
   );
 };