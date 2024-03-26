"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Book, Comment, Rate, Izbrannoe }) {
      this.hasMany(Book, { foreignKey: "user_id" });
      this.hasMany(Comment, { foreignKey: "user_id" });
      this.hasMany(Rate, { foreignKey: "user_id" });
      this.hasMany(Izbrannoe, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
