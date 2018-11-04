const express = require('express');
const app = express();

const router = express.Router();
const authResources = require('resources').auth;
const authControllers = require('controllers').auth;
const responses = require('responses');

router.route('/login')
    .post(authResources.login, authControllers.login, responses.genericResponse);

router.route('/signup')
    .post(authResources.signup, authControllers.signup, responses.genericResponse);

router.route('/confirm')
    .get(authResources.confirm, authControllers.confirm, responses.genericResponse);

const passport = require('passport');
router.route('/who')
    .post(passport.authenticate('jwt', {session: false}),function (req, res) {
        // console.log(req.headers);
        // passport.authenticate('jwt', {session: false});
        console.log(req.user);
        res.send(req.user);
    })
app.use('/', router);

module.exports = app;