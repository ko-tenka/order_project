const express = require('express');

const router = express.Router();
const { Izbrannoe } = require('../../db/models');

async function addToFavorites(userId, bookId) {
  try {
    const existingFavorite = await Izbrannoe.findOne({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    });

    if (existingFavorite) {
      console.log('Книга уже добавлена в избранное для этого пользователя.');
      return false;
    }

    await Izbrannoe.create({
      user_id: userId,
      book_id: bookId,
      correct: true,
    });

    console.log('Книга успешно добавлена в избранное для пользователя.');
    return true;
  } catch (error) {
    console.error('Ошибка при добавлении книги в избранное:', error);
    throw error;
  }
}

router.post('/add/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Book ID', typeof id);
    const userId = req.session.userId.id;
    console.log('User ID', typeof userId);
    const added = await addToFavorites(userId, id);
    if (added) {
      res.status(201).json({ success: true, message: 'Книга успешно добавлена в избранное для пользователя.' });
    } else {
      res.status(400).json({ success: false, message: 'Книга уже добавлена в избранное для этого пользователя.' });
    }
  } catch (error) {
    console.error('Ошибка при добавлении книги в избранное:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
});

module.exports = router;

// // здесь я хочу получить данные из формы записи
//   на дегустацию и вывести пользователю по кнопке
//   "подтвердить" полное описание - что он выбрал и когда будет дегустация через fetch
// degRouter.get('/', async (req, res) => {
//   const { userId, login } = req.session;

//   const user = await User.findOne({ // тк в промежут таблице
//    нет связей, то мы из одной таблицы стучимся в другую через промеж
//     include: [// включая модель продукты с нужными аттрибутами
//       {
//         model: Product,
//         attributes: ['id', 'name', 'image', 'country', 'type', 'price'],
//         through: { // через промежуточный аттрибут name
//     что угодно, чтобы потом это можно было тоже показать
//           attributes: ['name', 'date'],
//         },
//       }],
//     where: { id: userId },
//   });
//   const trueProducts = user.get({ plain: true, nested: true });
//   const deg = await UserDegustation.findOne({
//     where: { user_id: userId },
//     attributes: ['name', 'date'],
//   });
//   const finalDeg = deg.get({ plain: true, nested: true });
//   renderTemplate(Degustation, { products: trueProducts.Products, login, finalDeg }, res);
//   const deg = await UserDegustation.findOne({
//     where: {user_id: userId},
//     attributes: ['name', 'date']
//   });
//   const finalDeg =  deg.get({ plain: true, nested: true });
//   renderTemplate(Degustation, { products:trueProducts['Products'], login, finalDeg }, res);
//   });
