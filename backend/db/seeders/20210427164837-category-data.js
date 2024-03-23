'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

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
   options.tableName = 'Categories'
      return queryInterface.bulkInsert(options, [
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
   options.tableName = 'Categories'
   return queryInterface.bulkDelete(options, null, {});
  }
};
