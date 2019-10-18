'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zonas = sequelize.define('Zonas', {
    id_zona: DataTypes.INTEGER,
    descripcionZona: DataTypes.STRING
  }, {});
  Zonas.associate = function(models) {
    // associations can be defined here
  };
  return Zonas;
};