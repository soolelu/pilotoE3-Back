"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class direccion extends Model {
    static associate(models) {
      
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