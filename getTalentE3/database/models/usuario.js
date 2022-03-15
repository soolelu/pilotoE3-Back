"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      //usuario.hasMany(models.rol, { as: "rol", foreignKey: "id" });
    }
  }
  usuario.init(
    {
      phone: DataTypes.STRING,
      email: { type: DataTypes.STRING, validate: { isEmail: true } },
      password: DataTypes.STRING,
      statusDelete: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updateAt: DataTypes.DATE,
      

    },
    {
      sequelize,
      modelName: "usuario",
    }
  );
  return usuario;
};
