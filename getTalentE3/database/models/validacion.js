"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class validacion extends Model {
    static associate(models) {
      validacion.belongsTo(models.usuario, { as: "usuario", foreignKey: "id" });
            
    }
  }
  validacion.init(
    {
      cod_activacion: DataTypes.STRING,
      cod_password_olvidada: DataTypes.STRING,
      activacion: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      id_usuario:DataTypes.INTEGER,

      
    },
    {
      sequelize,
      modelName: "validacion",
      tableName:  "validacion"
    }
  );
  return validacion;
};