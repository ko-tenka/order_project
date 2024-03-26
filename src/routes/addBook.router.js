const express = require('express');

const router = express.Router();
const { User, Book } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const AddBook = require('../views/AddBook');

// GET запрос для отображения страницы добавления книги
router.get('/', async (req, res) => {
  try {
    const { title } = res.app.locals;
    renderTemplate(AddBook, { title }, res);
  } catch (error) {
    res.status(500).send(`Ошибка при отображении страницы добавления книги: ${error}`);
  }
});

// POST запрос для добавления книги
router.post('/', async (req, res) => {
  console.log('Попали в ручку добавления книги', req.body);
  try {
    const {
      title, description, author, img, user_id,
    } = req.body;
    const newBook = await Book.create({
      title, description, author, img, user_id,
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: `Ошибка создания книги: ${error.message}` });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = await Book.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title || task.title;
    task.description = description || task.description;
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
