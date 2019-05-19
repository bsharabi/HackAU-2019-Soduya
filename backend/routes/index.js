const express = require('express');
const _ = require('lodash');
const router = express.Router();
const Chair = require('../db/models/chair');

router.get('/', async (req, res) => {
    Chair.findAll({
        where: {
        }
    }).then(chairs => {
    })
});

module.exports = router;