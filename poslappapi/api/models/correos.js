'use strict';
module.exports = (sequelize, DataTypes) => {
  const Correos = sequelize.define('Correos', {
    id_correo: DataTypes.INTEGER,
    dominioCorreo: DataTypes.STRING
  }, {});
  Correos.associate = function(models) {
    // associations can be defined here
  };
  return Correos;
};