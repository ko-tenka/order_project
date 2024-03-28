document.addEventListener('DOMContentLoaded', () => {
  const favoriteButtons = document.querySelectorAll('.fav-btn');

  favoriteButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const bookId = event.target.dataset.id; // Получаем ID книги из атрибута data-bookid кнопки

      try {
        const response = await fetch(`/favorites/add/${bookId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bookId }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          console.log('Книга успешно добавлена в избранное пользователя');
          // Добавьте здесь код для обновления интерфейса или других действий после успешного добавления книги в избранное
        } else {
          console.error('Ошибка при добавлении книги в избранное:', response.status);
          // Добавьте здесь код для обработки ошибки при добавлении книги в избранное
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        // Добавьте здесь код для обработки ошибок при выполнении запроса
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const favoriteButtons = document.querySelectorAll('.fav-btn');

//   favoriteButtons.forEach((button) => {
//     button.addEventListener('click', async (event) => {
//       event.preventDefault();
//       const bookId = event.target.dataset.id; // Получаем ID книги из атрибута data-bookid кнопки

//       try {
//         let response;
//         // Проверяем, добавлена ли книга в избранное
//         if (button.classList.contains('favorited')) {
//           response = await fetch(`/favorites/remove/${bookId}`, {
//             method: 'DELETE',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
//         } else {
//           response = await fetch(`/favorites/add/${bookId}`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ bookId }),
//           });
//         }

//         if (response.ok) {
//           const data = await response.json();
//           console.log(data);
//           if (button.classList.contains('favorited')) {
//             console.log('Книга успешно удалена из избранного пользователя');
//           } else {
//             console.log('Книга успешно добавлена в избранное пользователя');
//           }
//           // Добавьте здесь код для обновления интерфейса или других действий после успешного добавления/удаления книги в избранное
//           button.classList.toggle('favorited'); // Переключаем класс кнопки
//         } else {
//           console.error('Ошибка:', response.status);
//           // Добавьте здесь код для обработки ошибки
//         }
//       } catch (error) {
//         console.error('Ошибка при выполнении запроса:', error);
//         // Добавьте здесь код для обработки ошибок при выполнении запроса
//       }
//     });
//   });
// });
