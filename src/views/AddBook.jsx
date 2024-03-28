// const React = require('react');
// const Layout = require('./Layout');

// module.exports = function AddBook({ login }) {
//   return (
//     <Layout>
//       <div>
//         <div>Див книги</div>
//         <div>
//           <h1>Добавление книги</h1>
//           <form>
//             <label>
//               URL ссылка на обложку:
//               <input type="text" />
//             </label>
//             <button>Загрузить</button>
//             <br />
//             <img alt="Cover" />
//             <br />
//             <label>
//               Автор:
//               <input type="text" />
//             </label>
//             <br />
//             <label>
//               Название:
//               <input type="text" />
//             </label>
//             <br />
//             <label>
//               Описание:
//               <textarea />
//             </label>
//             <br />
//             <input type="hidden" name="login" value={login} />
//             <button type="submit">Добавить</button>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

const React = require('react');
const Layout = require('./Layout');

function AddBook({ login }) {
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

module.exports = AddBook;
