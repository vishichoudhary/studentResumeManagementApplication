"use strict";

const Sequelize = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(
    config.database.MYSQLDBName,
    config.database.MYSQLDBUsername,
    config.database.MYSQLDBPassword,
    {
        host: config.database.MYSQLDBHostname,
        dialect: 'mysql',
        dialectOptions: {
            requestTimeout: config.constants.requestTimeoutSequelize
        },
        define: {
            timestamps: false
        },
        timezone: '+00:00'
    });

module.exports = sequelize;