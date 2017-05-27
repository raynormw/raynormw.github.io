'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gedung = sequelize.define('Gedung', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Gedung.hasMany(models.Kantor, {foreignKey: 'gedung_id'});
      }
    }
  });
  return Gedung;
};
