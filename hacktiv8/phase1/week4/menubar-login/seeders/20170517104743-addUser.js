'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      email: 'tirtawiryaputra@yahoo.com',
      password: 'admin',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'erwin',
      email: 'erwin_mencret@dicelana.com',
      password: 'erwin',
      role: 'supervisor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'ade',
      email: 'ade_bos@ayam.com',
      password: 'ade',
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
