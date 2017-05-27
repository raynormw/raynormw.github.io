'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todos = sequelize.define('Todos', {
    title: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Todos.belongsTo(models.Users, { foreignKey: 'user_id'});
      },

      listMemo: function(callback){
        sequelize.query('SELECT "Todos".id, title, is_complete, "Users".email, "Todos"."createdAt" FROM "Todos" LEFT JOIN "Users" ON "Todos".user_id = "Users".id', { type: sequelize.QueryTypes.SELECT})
        .then( (Todos) => {
        console.log(Todos);
        console.log("\n");
        callback(Todos);
        })
        .catch( err => {
        console.log(err.message);
       })
      }

    }
  });
  return Todos;
};
