const express = require('express');
const session = require('express-session');
const router = express.Router();
const { Rate } = require('../../db/models');

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
      const { rate } = req.body;
      const user_id = req.session.userId.id;
      const newTask = await Rate.create({
        rate, user_id, book_id
      });
      res.json(newTask);
    } catch (err) {
      console.log('Error on taskRouter.post() ====>>>>', err);
      res.status(500).send('Error creating task');
    }
  });

module.exports = router; 