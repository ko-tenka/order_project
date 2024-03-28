const express = require('express');
const session = require('express-session');

const router = express.Router();
const { Rate, Comment } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { rate } = req.body;
    const user_id = req.session.userId.id;
    const newTask = await Rate.create({
      rate, user_id, book_id,
    });
    res.json(newTask);
  } catch (err) {
    console.log('Error on taskRouter.post() ====>>>>', err);
    res.status(500).send('Error creating task');
  }
});

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

module.exports = router;

