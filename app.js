const express = require('express');
const app = express();
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors')

//for connection etc things which should we made before server is ready
require('setup');

const bodyParser = require('body-parser');
const config = require('config');

app.listen(config.app.port, function() {
    console.log("server is listening on port " + config.app.port);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//use cors
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// setup the logger
app.use(morgan('combined', {stream: process.stdout}))


//middleware for every routes,so that i can use req.resp
app.all('*', function(req, res, next){
    req.resp = {}
    next();
})

//server public
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// setup routes
app.use(require('routes'));

module.exports = app;
