"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Izbrannoe extends Model {
    static associate({User, Book}) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Book, { foreignKey: "book_id" });
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
      modelName: "Izbrannoe",
    }
  );
  return Izbrannoe;
};
