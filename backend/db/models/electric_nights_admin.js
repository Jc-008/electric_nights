'use strict';
module.exports = (sequelize, DataTypes) => {
  const electric_nights_admin = sequelize.define('electric_nights_admin', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  electric_nights_admin.associate = function(models) {
    // associations can be defined here
  };
  return electric_nights_admin;
};