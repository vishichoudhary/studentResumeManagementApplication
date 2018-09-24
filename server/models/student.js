'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: 'string',
    size: 'string'
});

module.exports = mongoose.model('studentDb', schema);

