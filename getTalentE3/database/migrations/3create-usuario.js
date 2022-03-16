"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuario", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      statusDelete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        //allowNull: false,
        type: Sequelize.DATE,
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: "rol",
          key: "id",
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE",
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        references: {
          model: "empresa",
          key: "id",
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  },
};
