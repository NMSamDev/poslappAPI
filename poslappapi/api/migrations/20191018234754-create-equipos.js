'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_equipo: {
        type: Sequelize.INTEGER
      },
      nombreEquipo: {
        type: Sequelize.STRING
      },
      modeloEquipo: {
        type: Sequelize.STRING
      },
      descripcionEquipo: {
        type: Sequelize.STRING
      },
      fechaMantenimiento: {
        type: Sequelize.DATE
      },
      imagenEquipo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipos');
  }
};