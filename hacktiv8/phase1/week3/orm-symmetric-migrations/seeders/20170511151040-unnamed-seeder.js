'use strict';
const db = require('../models');
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return new Promise((resolve, reject) =>{
      db.Students.findAll()
      .then((Students)=>{
        if(Students){
          let promises = [];
          Students.forEach((Students) => {
            let promise = Students.updateAttributes({
              name: Students.getFullName()
            });
            promises.push(promise);
          })
          Promise.all(promises).then(function(data){
            resolve(data);
          })
          .catch((err)=>{
            reject(err);
          })
        }
      })
    })
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
