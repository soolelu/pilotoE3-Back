"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class direccion extends Model {
    static associate(models) {
      direccion.hasOne(models.solicitante, { as: "solicitante", foreignKey: "id" });
    }
  }
  direccion.init(
    {
      pais: DataTypes.STRING,
      estado: DataTypes.STRING,
      municipio: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "direccion",
    }
  );
  return direccion;
};