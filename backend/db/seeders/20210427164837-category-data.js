'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Categories', [
        {edmGenre:'House'},            //  1
        {edmGenre:'DeepHouse'},        //  2
        {edmGenre:'Techno'},           //  3
        {edmGenre:'Trance'},           //  4
        {edmGenre:'BigRoom'},          //  5
        {edmGenre:'DubStep'},          //  6
        {edmGenre:'Trap'}              //  7
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
