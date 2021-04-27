'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    edmGenre: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Event, {foreignKey: 'categoryId'})    // A category has many events, bc each event will only have 1 category
  };
  return Category;
};
