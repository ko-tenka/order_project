const express = require('express');
const session = require('express-session');

const router = express.Router();
const { Rate } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { rate, book_id } = req.body;
    const user_id = req.session.userId.id;

    const existingRate = await Rate.findOne({ where: { book_id, user_id } });
    if (existingRate) {
      res.status(400).json({ err: 'Запись уже существует' });
    } else {
      const newTask = await Rate.create({
        stars: rate,
        user_id,
        book_id,
      });
      res.status(200).json({ starDone: 'Ставим оценку' });
    }
  } catch (err) {
    console.log('Error on taskRouter.post() ====>>>>', err);
    res.status(500).send('Error creating task');
  }
});

module.exports = router;
