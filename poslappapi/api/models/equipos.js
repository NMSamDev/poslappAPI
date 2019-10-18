'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipos = sequelize.define('Equipos', {
    id_equipo: DataTypes.INTEGER,
    nombreEquipo: DataTypes.STRING,
    modeloEquipo: DataTypes.STRING,
    descripcionEquipo: DataTypes.STRING,
    fechaMantenimiento: DataTypes.DATE,
    imagenEquipo: DataTypes.STRING
  }, {});
  Equipos.associate = function(models) {
    // associations can be defined here
  };
  return Equipos;
};