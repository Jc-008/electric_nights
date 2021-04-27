'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    edmGenre: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.belongsTo(models.Event, {foreignKey: 'categoryId'})    // A category belong to one event, bc each event will only have 1 category
  };
  return Category;
};
