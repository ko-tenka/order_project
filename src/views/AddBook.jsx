const React = require('react');
const Layout = require('./Layout');

module.exports = function AddBook({login}) {

  return (
    <Layout login={login}>
      <div className="mainContainer">
        <h1>Создание книжки</h1>

        <form className="addTaskForm">
          <div>
            {' '}
            <input className="addBook" type="text" name="title" placeholder="Название" required />
          </div>
          <div>
            <textarea
              className="addBookText"
              type="text"
              name="description"
              placeholder="Описание"
              required
            />
          </div>
          <div><input className="addBook" type="text" name="author" placeholder="Автор" required /></div>
          <div><input className="addBook" type="text" name="img" placeholder="Ссылка на обложку" required /></div>
          <button className="addBookBtn" type="submit">Добавить</button>
        </form>
        <br />
        <hr style={{ border: '1px solid #8C5B5B' }} />
        <br />
        <div className="tasksContainer" />
      </div>
      <script defer src="/js/tasks.js" />
    </Layout>
  );
}
