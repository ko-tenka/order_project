const React = require('react');
 const Layout = require('./Layout');

 module.exports = function Page404({ }) {
   return (
     <Layout >
       <div className="container">
         <h1 className='title404'>
           Что-то пошло не так!
         </h1>
         
       </div>
       <div className='worr404'>
         <img className='worr ' src="/img/worr.gif" alt="" />
         </div>
     </Layout>
   );
 };