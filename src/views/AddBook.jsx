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

function AddBook() {
  return (
    <Layout>
      <div className='mainContainer'>
        <h1>TASKS FROM DATABASE</h1>

        <form className='addTaskForm'>
          <input type='text' name='title' placeholder='Title' required />
          <input
            type='text'
            name='description'
            placeholder='Description'
            required
          />
          <button type='submit'>Add Task</button>
        </form>

        <div className='tasksContainer'></div>
      </div>
      <script defer src='/js/tasks.js' />
    </Layout>
  );
}

module.exports = AddBook;
