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

router.route('/createEvent')
    .post(userResources.createEvent, userControllers.createEvent, responses.genericResponse);

router.route('/joinClub')
    .post(userResources.joinClub, userControllers.joinClub, responses.genericResponse);

router.route('/acceptRequest')
    .post(userResources.joinClub, userControllers.joinClub, responses.genericResponse);

app.use('/', router);

module.exports = app;