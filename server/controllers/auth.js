'use strict';

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const models = require('models'),
    Student = models.student,
    Token = models.token;
const functions = require('functions'),
    uuid = functions.uuidGenerator;
const config = require('config');

module.exports = {
    login: function (req, res, next) {
        req.resp = {
            statusCode: 200,
            data: "ho gya bc",
        }
        next();
    },

    signup: function (req, res, next) {
        req.resp = {};
        Student.findOne({ email: req.body.email }, function (err, student) {
            if (student) {
                req.resp = {
                    statusCode: 400,
                    msg: 'The email address you have entered is already associated with another account.'
                }
                next();
            };

            student = new Student({
                _id: uuid.v4(),
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                email: req.body.email,
                isVerified: false,
                mobileNo: 0,
                branch: "Cse dual",
                password: req.body.password,
                rollNo: req.body.rollNo
            });

            student.save(function (err) {
                if (err) {
                    req.resp = {
                        statusCode: 500,
                        msg: err.message
                    }
                    next();
                }
                var token = new Token({ _id: student._id, token: crypto.randomBytes(16).toString('hex') });

                token.save(function (err) {
                    if (err) {
                        req.resp = {
                            statusCode: 500,
                            msg: err.message
                        }
                        next();
                    }

                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        port: '465',
                        secure: true,
                        auth: {
                            user: config.mailer.user,
                            pass: config.mailer.pass
                        }
                    });
                    var mailOptions = {
                        from: config.mailer.user,
                        to: student.email, subject: 'Account Verification Token',
                        text: 'Hello,\n\n' +
                            'Please verify your account by clicking the link: \n' + config.endpoints.confirm + "?token=" + token.token + '.\n'
                    };
                    transporter.sendMail(mailOptions, function (err) {
                        if (err) {
                            req.resp = {
                                statusCode: 500,
                                msg: err.message
                            }
                            next();
                        }
                        req.resp = {
                            statusCode: 200,
                            msg: 'A verification email has been sent to ' + student.email + '.'
                        }
                        next();
                    });
                });
            });
        });
    },

    confirm: function (req, res, next) {
        req.resp = {};
        Token.findOne({ token: req.query.token }, function (err, token) {
            if (!token) {
                req.resp = {
                    statusCode: 400,
                    msg: 'We were unable to find a valid token. Your token my have expired.'
                }
                next();
            };
            Student.findOne({ _id: token._id }, function (err, student) {
                if (!student) {
                    req.resp = {
                        statusCode: 400,
                        msg: 'We were unable to find a student for this token.'
                    }
                    next();
                };
                if (student.isVerified) {
                    req.resp = {
                        statusCode: 400,
                        msg: 'This student has already been verified.'
                    }
                    next();
                };

                student.isVerified = true;
                student.save(function (err) {
                    if (err) {
                        req.resp = {
                            statusCode: 500,
                            msg: err.message
                        }
                        next();
                    }
                    req.resp = {
                        statusCode: 200,
                        msg: "The account has been verified. Please log in."
                    }
                    next();
                });
            });
        });
    }
}