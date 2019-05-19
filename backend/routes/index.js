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

router.post('/chair', async (req, res) => {
    const chair = req.body.chair;

    Chair.create({
        "chair_id":req.body.chair_id,
       "university_name":req.body.university_name,
       "floor":req.body.floor,
       "desk":req.body.desk
    }).then(chairs => {
        res.json(chairs)
    }).catch(err => {
        res.status(400).send(`error create chair: ${err.message}`)
    })
});

module.exports = router;