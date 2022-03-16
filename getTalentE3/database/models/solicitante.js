"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class solicitante extends Model {
    static associate(models) {
      solicitante.hasMany(models.usuario, { as: "usuario", foreignKey: "id" });
      solicitante.hasMany(models.direccion, { as: "direccion", foreignKey: "id" });
    }
  }
  solicitante.init(
    {
      nombre: DataTypes.STRING,
      ap_paterno: DataTypes.STRING,
      ap_materno: DataTypes.STRING,
      sexo: DataTypes.STRING,
      fechaNacimiento: DataTypes.DATE,
      estadoCivil:DataTypes.STRING,
      edad:DataTypes.INT,
      video:DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "solicitante",
    }
  );
  return solicitante;
};