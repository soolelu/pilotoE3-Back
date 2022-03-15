"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("direccion", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("direccion");
  },
};
