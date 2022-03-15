"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    static associate(models) {
      //usuario.hasMany(models.rol, { as: "rol", foreignKey: "id" });
    }
  }
  rol.init(
    {
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rol",
    }
  );
  return rol;
};
