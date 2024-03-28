const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Izbrannoe extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Book, { foreignKey: 'book_id' });
    }

    static async addToFavorites(userId, bookId) {
      // Проверяем, добавлена ли уже книга в избранное для данного пользователя
      const existingFavorite = await this.findOne({
        where: {
          user_id: userId,
          book_id: bookId,
        },
      });

      if (existingFavorite) {
        console.log('Книга уже добавлена в избранное для этого пользователя.');
        return false; // Книга уже добавлена в избранное для данного пользователя
      }

      // Если книга еще не добавлена, добавляем её
      await this.create({
        user_id: userId,
        book_id: bookId,
        correct: true,
      });

      console.log('Книга успешно добавлена в избранное для пользователя.');
      return true; // Книга успешно добавлена в избранное для данного пользователя
    }
  }

  Izbrannoe.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      correct: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Izbrannoe',
    },
  );
  return Izbrannoe;
};
