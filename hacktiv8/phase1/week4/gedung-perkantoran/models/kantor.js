'use strict';
module.exports = function(sequelize, DataTypes) {
  var Kantor = sequelize.define('Kantor', {
    nama: DataTypes.STRING,
    jumlah_karyawan: DataTypes.INTEGER,
    gedung_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Kantor.belongsTo(models.Gedung, { foreignKey: 'gedung_id'});
      }
    }
  });
  return Kantor;
};
