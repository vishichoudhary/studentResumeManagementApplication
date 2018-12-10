const express = require('express');
const app = express();
const router = express.Router();

const models = require('models'),
    Club = models.club;

router.route('/createClub')
    .post((req, res) => {
        const club = new Club({
            _id: uuid.v4(),
            name: req.body.name,
            facultyCoordinator: req.body.facultyCoordinator,
            president: req.body.president,
            vicePresident: req.body.vicePresident,
            totalMembers: 2,
            members: [president, vicePresident]
        });
        club.save(function(err){
            res.send(err);
        })
    })

app.use('/', router);

module.exports = app;