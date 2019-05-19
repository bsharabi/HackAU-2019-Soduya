const express = require('express');
const _ = require('lodash');
const router = express.Router();
const Chair = require('../db/models/chair');

router.get('/', async (req, res) => {
    const chairs = { a:'a'}
    res.json(chairs)
    // Chair.findAll({
    //     where: {
    //     }
    // }).then(chairs => {
    //     res.json(chairs)
    // })
});

module.exports = router;