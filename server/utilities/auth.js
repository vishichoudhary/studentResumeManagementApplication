'use strict';
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const models = require('models'),
    Student = models.student,
    Token = models.token;
const functions = require('functions'),
    uuid = functions.uuidGenerator;

module.exports = {
    createStudent: async function (req, res) {

        await Student.findOne({ email: req.body.email }, async function (err, student) {

            // Make sure student doesn't already exist
            if (student) return res.status(400).send({
                msg: 'The email address you have entered is already associated with another account.'
            });

            // Create and save the student
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
            console.log(student);
            await student.save(async function (err) {
                console.log(err);
                if (err) { return res.status(500).send({ msg: err.message }); }

                // Create a verification token for this student
                var token = new Token({ _id: student._id, token: crypto.randomBytes(16).toString('hex') });

                // Save the verification token
                await token.save(async function (err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }

                    // Send the email
                    var transporter = nodemailer.createTransport({
                        service: 'Sendgrid',
                        auth: {
                            student: process.env.SENDGRID_USERNAME,
                            pass: process.env.SENDGRID_PASSWORD
                        }
                    });
                    var mailOptions = {
                        from: 'vishal129.vk@gmail.com',
                        to: student.email, subject: 'Account Verification Token',
                        text: 'Hello,\n\n' +
                            'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n'
                    };
                    await transporter.sendMail(mailOptions, function (err) {
                        if (err) { return res.status(500).send({ msg: err.message }); }
                        res.status(200).send('A verification email has been sent to ' + student.email + '.');
                    });
                });
            });
        });
    }
}