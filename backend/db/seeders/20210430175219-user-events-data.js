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
   
   options.tableName = 'UserEvents'
   return queryInterface.bulkInsert(options, [
      {userId:1, eventId:1},
      {userId:1, eventId:6},
      {userId:1, eventId:8},
      {userId:1, eventId:15},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('People', null, {});
    */
   
   options.tableName = 'UserEvents'
   return queryInterface.bulkDelete(options, null, {});
  }
};
