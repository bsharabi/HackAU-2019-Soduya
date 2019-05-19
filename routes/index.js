const express = require('express');
const router = express.Router();

const login = require('./login');
const account = require('./account');

router.use('/login', login);
router.use('/account', account);

module.exports = router;