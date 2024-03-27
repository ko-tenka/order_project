const express = require('express');

const router = express.Router();
const { Izbrannoe } = require('../../db/models');

router.get('/add/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.session.userId.id;
    const favorite = await Izbrannoe.create({ user_id, book_id: id, correct: true });
    res.json(favorite);
  } catch (error) {
    console.log('ERROR', error);
  }
});

// router.post('/add/:id', async (req, res) => {
//   try {
//     const { book_id } = req.body;
//     const { id } = req.session.userId.id;

//     // Создаем запись в базе данных для избранной книги
//     const favorite = await Izbrannoe.create({ user_id: userId, book_id });

//     res.status(201).json({ success: true, favorite });
//   } catch (error) {
//     console.error('Ошибка при добавлении книги в избранное:', error);
//     res.status(500).json({ success: false, message: 'Ошибка сервера' });
//   }
// });

// // здесь я хочу получить данные из формы записи на дегустацию и вывести пользователю по кнопке "подтвердить" полное описание - что он выбрал и когда будет дегустация через fetch
// degRouter.get('/', async (req, res) => {
//   const { userId, login } = req.session;

//   const user = await User.findOne({ // тк в промежут таблице нет связей, то мы из одной таблицы стучимся в другую через промеж
//     include: [// включая модель продукты с нужными аттрибутами
//       {
//         model: Product,
//         attributes: ['id', 'name', 'image', 'country', 'type', 'price'],
//         through: { // через промежуточный аттрибут name что угодно, чтобы потом это можно было тоже показать
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

module.exports = router;
