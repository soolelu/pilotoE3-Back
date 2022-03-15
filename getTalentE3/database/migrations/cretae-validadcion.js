"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("validacion", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("validacion");
  },
};
