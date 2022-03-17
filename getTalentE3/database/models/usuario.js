"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      usuario.belongsTo(models.rol, { as: "rol", foreignKey: "id" });
      usuario.belongsTo(models.empresa, { as: "empresa", foreignKey: "id" });
      usuario.hasOne(models.solicitante, { as: "solicitante", foreignKey: "id" });
      usuario.hasOne(models.validacion, { as: "validacion", foreignKey: "id" });
    }
  }
  usuario.init(
    {
      //phone: DataTypes.STRING,
      email: { type: DataTypes.STRING, validate: { isEmail: true } },
      password: DataTypes.STRING,
      statusDelete: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      id_rol: DataTypes.INTEGER,
      id_empresa: DataTypes.INTEGER,

    },
    {
      sequelize,
      modelName: "usuario",
      tableName: "usuario"
    }
  );
  return usuario;
};
