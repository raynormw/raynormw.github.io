'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define('Tasks', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData(callback) {
        Tasks.findAll()
        .then((data) => {
          return callback(data);
        });
      }
    }

  });
  return Tasks;
};
