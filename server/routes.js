const express = require("express");
const app = express();

app.all('/heartbeat', function (req, res, next) {
    res.send("ok");
});

// index page 
app.get('/', function (req, res) {
    res.render('pages/home');
});

// join page
app.get('/join', function (req, res) {
    res.render('pages/join')
});

// confirm page
app.get('/confirm', function (req, res) {
    res.render('pages/confirm')
});

require(__dirname + '/routes/').forEach(function (a) {
    app.use('/api' + a.prefix, a.app);
});

module.exports = app;