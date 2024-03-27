const express = require('express');

const router = express.Router();
const { User, Book } = require('../../db/models');
// const renderTemplate = require('../utils/renderTemplate');
// const AddBook = require('../views/AddBook');

module.exports = router.get('/', async (req, res) => {
  try {
    const tasks = await Book.findAll({ raw: true });
    res.json(tasks);
  } catch (err) {
    console.log('Error on taskRouter.get() ====>>>>', err);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      title, description, author, img, user_id,
    } = req.body;
    const newTask = await Book.create({
      title, description, author, img, user_id,
    });
    res.json(newTask);
  } catch (err) {
    console.log('Error on taskRouter.post() ====>>>>', err);
    res.status(500).send('Error creating task');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Book.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    console.log(`Error on taskRouter.get(${id}) ====>>>>`, err);
    res.status(500).send('Error fetching task');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author, img, } = req.body;
    const task = await Book.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.author = author || task.author;
    task.img = img || task.img;
    await task.save();
    res.json(task);
  } catch (err) {
    console.log(`Error on taskRouter.patch(${id}) ====>>>>`, err);
    res.status(500).json({ error: 'Error updating task' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });
    res.json({ success: true, messageId: id });
  } catch (err) {
    console.log('Error on taskRouter.delete() ====>>>>', err);
    res.status(500).json({ success: false, error: 'Error deleting task' });
  }
});

module.exports = router;
