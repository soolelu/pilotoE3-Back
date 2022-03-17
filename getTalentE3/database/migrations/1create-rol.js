"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rol", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      solicitante: {
        type: Sequelize.BOOLEAN
      },
      empleador: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        //allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rol");
  },
};
