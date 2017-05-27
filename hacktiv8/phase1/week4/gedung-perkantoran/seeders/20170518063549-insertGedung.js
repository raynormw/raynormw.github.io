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
    return queryInterface.bulkInsert('Gedungs', [{
      nama: 'Gedung Aquarius',
      alamat: 'Pondok Indah',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Pondok Indah Office Tower',
      alamat: 'Pondok Indah',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Menara Jamsostek',
      alamat: 'Kuningan',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
