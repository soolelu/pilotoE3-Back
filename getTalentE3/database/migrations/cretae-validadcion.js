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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("validacion");
  },
};
