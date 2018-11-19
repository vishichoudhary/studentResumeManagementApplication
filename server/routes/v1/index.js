var express = require('express');
var app = express();

app.use('/auth', require('./auth'));
app.use('/user', require('./user'));

module.exports = app;