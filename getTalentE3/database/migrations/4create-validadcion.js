"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("validacion", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cod_activacion: {
        type: Sequelize.STRING(50)
      },
      cod_password_olvidada: {
        type: Sequelize.STRING(50)
      },
      activacion_email: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuario",
          key: "id",
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("validacion");
  },
};
