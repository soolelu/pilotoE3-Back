"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("solicitante", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      ap_paterno: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      ap_materno: {
        type: Sequelize.STRING(30)
      },
      sexo: {
        type: Sequelize.STRING(10)
      },
      fecha_nacimiento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estadoCivil: {
        type: Sequelize.STRING(10)
      },
      edad: {
        type: Sequelize.INTEGER
      },
     // video: {
     //   type: Sequelize.STRING(10)
     // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("solicitante");
  },
};
