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
    return queryInterface.bulkInsert('Kantors', [{
      nama: 'Hacktiv8',
      jumlah_karyawan: 21,
      gedung_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Zara',
      jumlah_karyawan: 5,
      gedung_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Charles and Keith',
      jumlah_karyawan: 6,
      gedung_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Guardian Pharmacy',
      jumlah_karyawan: 15,
      gedung_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Telkomsel',
      jumlah_karyawan: 300,
      gedung_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Bank BNI',
      jumlah_karyawan: 200,
      gedung_id: 3,
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
