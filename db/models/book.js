"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ User, Izbrannoe, Comment, Rate }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(Izbrannoe, { foreignKey: "book_id" });
      this.hasMany(Comment, { foreignKey: "book_id" });
      this.hasMany(Rate, { foreignKey: "book_id" });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      author: DataTypes.STRING,
      img: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
