'use strict';

const student = require('models').student; 

module.exports = {
    login: function(req, res, next){
        next();
    },
    signup: function(req, res, next){
        student.create({size:'small'}, function(err, small){
            console.log(err);
            console.log(small);
        })
        next();
    }
}