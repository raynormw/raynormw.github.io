'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Students.find({
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
    },
    height : {
      type : DataTypes.INTEGER,
      validate : {
        min : {
          args: 150,
          msg : 'Height should be above 150'
        }
      }
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING
}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData(callback) {
        Students.findAll()
        .then((data) => {
          return callback(data);
        });
      }
    },

    instanceMethods: {
      getAge: function() {
        let result =  new Date().getFullYear() - this.birthday.getFullYear();
        return `Age: ${result}`;
      }
    }
  });
  return Students;
};
