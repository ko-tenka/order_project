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
