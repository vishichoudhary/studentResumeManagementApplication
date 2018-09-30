'use strict';

const Student = require('models').student; 
const authUtilities = require('utilities').auth;

module.exports = {
    login: function(req, res, next){
        next();
    },
    signup: function(req, res, next){
        authUtilities.createStudent();
        next();
    }
}