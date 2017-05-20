'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_teachers = sequelize.define('Student_teachers', {
    student_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student_teachers;
};