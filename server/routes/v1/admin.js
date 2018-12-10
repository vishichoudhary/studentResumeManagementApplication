const express = require('express');
const app = express();
const router = express.Router();

const models = require('models'),
    Club = models.club;
const functions = require('functions'),
    uuid = functions.uuidGenerator;

router.route('/createClub')
    .post((req, res) => {
        const club = new Club({
            _id: uuid.v4(),
            name: req.body.name,
            facultyCoordinator: {
                _id: req.body.facultyCoordinator,
                name: req.body.facultyCoordinatorName
            },
            president: {
                _id: req.body.president,
                name: req.body.presidentName
            },
            vicePresident: {
                _id: req.body.vicePresident,
                name: req.body.vicePresidentName
            },
            totalMembers: 2,
            members: [{
                _id: req.body.president,
                name: req.body.presidentName
            }, {
                _id: req.body.vicePresident,
                name: req.body.vicePresidentName
            }]
        });
        club.save(function (err) {
            res.send(err);
        })
    })

app.use('/', router);

module.exports = app;