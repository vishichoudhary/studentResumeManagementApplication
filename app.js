const express = require('express');
const app = express();
const morgan = require('morgan');
const passport = require('passport');

//for connection etc things which should we made before server is ready
require('setup');

const bodyParser = require('body-parser');
const config = require('config');

app.listen(config.app.port, function() {
    console.log("server is listening on port " + config.app.port);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// setup the logger
app.use(morgan('combined', {stream: process.stdout}))

// setup routes
app.use(require('routes'));

module.exports = app;
