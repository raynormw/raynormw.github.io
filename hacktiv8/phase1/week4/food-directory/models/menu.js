'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    tag: DataTypes.STRING,
    picture: DataTypes.STRING,
    id_resto: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Menu.belongsTo(models.Resto, {foreignKey: 'id_resto'});
      }
    }
  });
  return Menu;
};