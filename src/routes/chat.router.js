const express = require('express');
const session = require('express-session');

const chatRouter = express.Router();
const { Comment } = require('../../db/models');

chatRouter.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.session.userId.id;
    const { chat } = req.body;
    await Comment.create({
      book_id: id,
      user_id: userId,
      comment: chat,
    });
    res.json({ commentDone: 'Вы добавили комент' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = chatRouter;
