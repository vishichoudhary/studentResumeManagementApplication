'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    userFirstName: {
      type: DataTypes.STRING,
      alloNull: false
    },
    userLastName: {
      type: DataTypes.STRING,
      alloNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      alloNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      alloNull: false
    },
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};