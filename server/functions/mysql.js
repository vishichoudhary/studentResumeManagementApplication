"use strict";

const mysql = require('mysql');
const sequelize = require('./sequelize');
const config = require('../../config');

const connection = mysql.createConnection({
    host: config.database.MYSQLDBHostname,
    user: config.database.MYSQLDBUsername,
    password: config.database.MYSQLDBPasword,
    database: config.database.MYSQLDBName
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    connection: connection
};