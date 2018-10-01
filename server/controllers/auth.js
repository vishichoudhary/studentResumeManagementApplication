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
        next();
    },

    signup: function (req, res, next) {
        Student.findOne({ email: req.body.email }, function (err, student) {
            if (student) return res.status(400).send({
                msg: 'The email address you have entered is already associated with another account.'
            });

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
                if (err) { return res.status(500).send({ msg: err.message }); }
                var token = new Token({ _id: student._id, token: crypto.randomBytes(16).toString('hex') });

                token.save(function (err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }

                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: config.mailer.user,
                            pass: config.mailer.pass
                        }
                    });
                    var mailOptions = {
                        from: config.mailer.student,
                        to: student.email, subject: 'Account Verification Token',
                        text: 'Hello,\n\n' +
                            'Please verify your account by clicking the link: \n' + config.endpoints.confirm + "?token=" + token.token + '.\n'
                    };
                    transporter.sendMail(mailOptions, function (err) {
                        if (err) { return res.status(500).send({ msg: err.message }); }
                        res.status(200).send('A verification email has been sent to ' + student.email + '.');
                    });
                });
            });
        });
    },

    confirm: function (req, res, next) {
        Token.findOne({ token: req.query.token }, function (err, token) {
            if (!token) return res.status(400).send({
                type: 'not-verified',
                msg: 'We were unable to find a valid token. Your token my have expired.'
            });
            Student.findOne({ _id: token._id }, function (err, student) {
                if (!student) return res.status(400).send({
                    msg: 'We were unable to find a student for this token.'
                });
                if (student.isVerified) return res.status(400).send({
                    type: 'already-verified',
                    msg: 'This student has already been verified.'
                });

                student.isVerified = true;
                student.save(function (err) {
                    if (err) {
                        res.status(500).send({ msg: err.message });
                    }
                    res.status(200).send("The account has been verified. Please log in.");
                });
            });
        });
    }
}