'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Users.hasMany(models.Todos, {foreignKey: 'user_id'});
      }
    }
  });
  return Users;
};
