// const express = require('express');
// const session = require('express-session');
// const router = express.Router();
// const { Rate} = require('../../db/models');

// router.get('/', async (req, res) => {
//     try {
//       const allRate = await Rate.findAll({ raw: true });
//       console.log(allRate)
//       res.json(allRate);
//     } catch (err) {
//       console.log('Error on taskRouter.get() ====>>>>', err);
//     }
//   });