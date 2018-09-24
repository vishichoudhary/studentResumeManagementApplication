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

app.use('/', router);

module.exports = app;