const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ login }) {
  return (
    <Layout login={login}>
      <div className="fav-container"> </div>
      <div className="fav-left"> </div>
      <div className="fav-right"> </div>
      <script src="/js/favorite.js" />
    </Layout>
  );
};
