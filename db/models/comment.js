"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Book, { foreignKey: "book_id" });
    }
  }
  Comment.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
