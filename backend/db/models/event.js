'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    host: DataTypes.STRING,
    location: DataTypes.STRING,
    time: DataTypes.TIME,
    description: DataTypes.STRING,
    ticketPrice: DataTypes.INTEGER,
    ticketCount: DataTypes.INTEGER,
    categoryId: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.belongTo(models.Category, {foreignKey: 'categoryId'})    // An event could have many categories
  };
  return Event;
};
