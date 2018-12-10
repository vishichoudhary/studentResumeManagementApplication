var express = require('express');
var app = express();

app.use('/auth', require('./auth'));
app.use('/user', require('./user'));
app.use('/admin', require('./admin'));

module.exports = app;