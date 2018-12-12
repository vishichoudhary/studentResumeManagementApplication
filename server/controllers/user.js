'use strict';

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const models = require('models'),
    Student = models.student,
    Token = models.token,
    Event = models.event;
const functions = require('functions'),
    uuid = functions.uuidGenerator;
const config = require('config');
const jwt = require('jsonwebtoken');
const passport = require("passport");

module.exports = {
    profile: function(req, res, next){
        next();
    },
    createEvent: function(req, res, next) {
        const event = new Event ({
            _id: uuid.v4(),
            name: req.body.name,
            description: req.body.description,
            interested: 0,
            notInterested: 0,
            comments: []
        })
        event.save(function(err){
            if(err){
                req.resp = {
                    statusCode: 500,
                    msg: err.message
                }
                next();
            }
            else{
                req.resp = {
                    statusCode: 200
                }
                next();
            }
        })
    }
}