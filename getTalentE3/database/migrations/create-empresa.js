"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("empresa", {
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
      descripcion: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
     // logotipo: {
     //   type: Sequelize.STRING(30)
     // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("empresa");
  },
};
