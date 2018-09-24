"use strict";

var sequelize = require('functions').sequelize;
var Sequelize = require('sequelize');

module.exports = {
    user: require('./user')(sequelize, Sequelize)
}