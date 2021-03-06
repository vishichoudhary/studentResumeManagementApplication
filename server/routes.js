const express = require("express");
const app = express();
const passport = require('passport');
const passportConfig = require('setup').passportConfig;

app.all('/heartbeat', function (req, res, next) {
    res.send("ok");
});

// index page 
app.all('/', (req, res, next) => {
    if(req.body.token === 'fuckerToken') 
        res.redirect('/join');
    else passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if(!user) res.render('pages/loader', { url: "http://localhost:3003/" });
        else res.render('pages/home');
    })(req, res, next);
});

// join page
app.get('/join', function (req, res) {
    res.render('pages/join')
});

// confirm page
app.get('/confirm', function (req, res) {
    res.render('pages/confirm')
});

// profile page
app.get('/profile', function (req, res) {
    res.render('pages/profile')
});


// clubs page
app.get('/clubs/:id', function (req, res) {
    res.render('pages/club')
});

//event page
app.get('/event/:id', function (req, res) {
    res.render('pages/event')
})

//request page
app.get('/joinClub', function (req, res) {
    res.render('pages/joinClub')
})

// write application
app.get('/requestPermission', function (req, res) {
    res.render('pages/requestPermission');
})

require(__dirname + '/routes/').forEach(function (a) {
    app.use('/api' + a.prefix, a.app);
});

module.exports = app;