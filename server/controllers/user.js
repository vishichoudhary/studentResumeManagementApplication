'use strict';

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const models = require('models'),
    Student = models.student,
    Token = models.token;
const functions = require('functions'),
    uuid = functions.uuidGenerator;
const config = require('config');
const jwt = require('jsonwebtoken');
const passport = require("passport");

module.exports = {
    profile: function(req, res, next){
        next();
    },
}