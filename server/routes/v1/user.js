const express = require('express');
const app = express();

const router = express.Router();
const userResources = require('resources').user;
const userControllers = require('controllers').user;
const responses = require('responses');
const functions = require('functions'),
      authFilter = functions.authFilter;

router.route('/profile')
    .post(authFilter.isLoggedIn, userResources.profile, userControllers.profile, responses.genericResponse);

app.use('/', router);

module.exports = app;