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
        type: Sequelize.ENUM(['Femenino', 'Masculino','Prefiero No Decirlo'])
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
      video: {
        type: Sequelize.STRING
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
      id_direccion: {
        type: Sequelize.INTEGER,
        references: {
          model: "direccion",
          key: "id",
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("solicitante");
  },
};
