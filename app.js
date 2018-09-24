const express = require('express');
const app = express();
const morgan = require('morgan');
const functions = require('functions');

app.listen(5000, function() {
    console.log("server is listening on port 5000");
});

// setup the logger
app.use(morgan('combined', {stream: process.stdout}))

// setup routes
app.use(require('routes'));

module.exports = app;
