const express = require('express');
const session = require('express-session');
const router = express.Router();
const { Rate, Comment } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
// ===================================

// router.get('/', async (req, res) => {
//   try {
//     const userId = req.params.user.id;
//     const bookId = req.params.book.id;
//     const comments = await Comment.findAll({ where: { userId: user_id, bookId: book_id } });
//     if (comments.length > 0) {
//       const latestComment = comments[comments.length - 1];
//       res.json({ latestComment });
//     } else {
//       res.json({ message: 'Коментов нет' });
//     }
//     res.json(comments);
//   } catch (err) {
//     console.log('Error on  ====>>>>', err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     // const {
//     //   comment,
//     // } = req.body;
//     // const user_id = req.session.userId;
//     // const book_id = req.session.bookId;
//     const newComment = await Comment.create({
//       user_id: req.body.user_id,
//       book_id: req.body.book_id,
//       comment: req.body.comment,
//     });
//     res.json(newComment);
//   } catch (err) {
//     console.log('Error on  ====>>>>', err);
//     res.status(500).send('ничего не добавилось');
//   }
// });


      const { rate, book_id } = req.body;
      const user_id = req.session.userId.id;

      const existingRate = await Rate.findOne({ where: { book_id, user_id } });
      if (existingRate) {
          res.status(400).json({ err: 'Запись уже существует' });
      }else{

      const newTask = await Rate.create({
          stars: rate,
          user_id,
          book_id
      });
      res.status(200).json({ starDone: 'Ставим оценку' });
    }
    
  } catch (err) {
      console.log('Error on taskRouter.post() ====>>>>', err);
      res.status(500).send('Error creating task');
  }
});

module.exports = router;

