'use strict';
module.exports = function(sequelize, DataTypes) {
  var Foodcourt = sequelize.define('Foodcourt', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Foodcourt.hasMany(models.Resto, {foreignKey: 'id_foodcourt'})
      }
    }
  });
  return Foodcourt;
};