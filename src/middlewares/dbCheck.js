const { sequelize } = require('../../db/models');

module.exports = async (req, res, next) => {
  try {
    await sequelize.authenticate().then(() => console.info(`Database - ${sequelize.getDatabaseName()} - connected`));
    next();
  } catch (error) {
    console.log('DB ERROR =>>>', error.message);
  }
};
