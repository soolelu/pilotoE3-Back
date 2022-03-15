"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class validacion extends Model {
    static associate(models) {
      
    }
  }
  validacion.init(
    {
      cod_activacion: DataTypes.STRING,
      cod_password_olvidada: DataTypes.STRING,
      activacion: DataTypes.BOOLEAN,
      
    },
    {
      sequelize,
      modelName: "validacion",
    }
  );
  return validacion;
};