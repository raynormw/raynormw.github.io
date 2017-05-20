'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Teachers.find({
            where: {email: value},
            attributes: ['id']
          })
          .done(function(error, user) {
            if (error)
                // Some unexpected error occured with the find method.
                return next('Email address already in use!');
            if (user)
                // We found a user with this email address.
                // Pass the error to the next method.
                return next('Email address already in use!');
            // If we got this far, the email address hasn't been used yet.
            // Call next with no arguments when validation is successful.
            next();
          });
        }
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        len: function(value) {
          if (value.toString().length < 10 || value.toString().length > 13) {
            throw new Error('Phone length must be 10 - 13');
          }
        },
        isNumeric: true,
        isAlphanumeric: {
          args: false,
          msg: "Phone not allowed letters\nPhone not allowed alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Teachers.belongsToMany(models.Students, {through: 'Student_teachers', foreignKey: 'teacher_id'});
      }
    }
  });
  return Teachers;
};
