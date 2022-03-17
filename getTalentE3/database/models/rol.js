"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    static associate(models) {
      rol.hasMany(models.usuario, { as: "usuario", foreignKey: "id" });
    }
  }
  rol.init(
    {
      solicitante: DataTypes.BOOLEAN,
      empleador: DataTypes.BOOLEAN,
      admin: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "rol",
      tableName: "rol"
    }
  );
  return rol;
};
 