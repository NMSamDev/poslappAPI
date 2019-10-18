'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    id_rol: DataTypes.INTEGER,
    nombreRol: DataTypes.STRING,
    filtro: DataTypes.BOOLEAN
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};