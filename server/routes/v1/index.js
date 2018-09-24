var express = require('express');
var app = express();

app.use('/auth', require('./auth'));

module.exports = app;