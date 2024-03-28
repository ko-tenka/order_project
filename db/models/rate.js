const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Book, { foreignKey: 'book_id' });
    }
  }
  Rate.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      stars: DataTypes.INTEGER,
      correct: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Rate',
    },
  );
  return Rate;
};
