"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class empresa extends Model {
    static associate(models) {
      
    }
  }
  empresa.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      logotipo: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "empresa",
    }
  );
  return empresa;
};