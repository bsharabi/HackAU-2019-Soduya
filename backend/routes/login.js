const express = require('express');
const _ = require('lodash');
const router = express.Router();
const Jwt = require('jsonwebtoken');
const User = require('../db/models/user');
const Account = require('../db/models/account');
const LoginToken = require('../db/models/login-token');
const uuid = require('uuid/v4');
const base64 = require('base-64');
const jwtDecode = require('jwt-decode');

const SECRET_JWT = 'HSGA57@ug32uy4thdYTB#&TDq3de3wtbBXUY3T4BD';
const YEAR_AGE = 3600 * 1000 * 24 * 365;

router.post('/createToken', async (req, res) => {
    const { email, password, remember } = req.body;
    const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (!email || !password) return res.sendStatus(503);

    const user = await User.findOne({ where: { email, password: base64.encode(password) } });
    if (!user) return res.sendStatus(503);

    const token = `${uuid()}${uuid()}`.replace(/-/g, '');

    return LoginToken.create({ user_id: user.id, token, client_ip }).then(() => {
        const jwt = {
            user_id: user.id,
            login_token: token,
        }

        if (remember) {
            res.cookie('jwt', Jwt.sign(jwt, SECRET_JWT), { maxAge: YEAR_AGE });
        }
        else {
            res.cookie('jwt', Jwt.sign(jwt, SECRET_JWT));
        }

        return res.json({ jwt });
    }).catch(err => {
        console.error(err.message);
        return res.sendStatus(503);
    });
});

router.post('/destroyToken', async (req, res) => {
    const jwt = _.get(req, 'cookies.jwt');
    const login_token = jwt && jwtDecode(jwt).login_token;
    if (!login_token) return res.sendStatus(503);

    const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const token = await LoginToken.findOne({ where: { token: login_token, client_ip } });
    if (!token) return res.sendStatus(503);

    const user = await User.findOne({ where: { id: token.user_id } });
    if (!user) return res.sendStatus(503);

    const account = await Account.findOne({ where: { user_id: user.id } });

    return token.destroy().then(() => {
        const jwt = {
            last_logined: {
                email: user.email,
                first_name: account && account.first_name,
                last_name: account && account.last_name,
            }
        }
        res.cookie('jwt', Jwt.sign(jwt, SECRET_JWT), { maxAge: YEAR_AGE });
        res.sendStatus(200);
    }).catch(err => {
        console.error(err.message);
        return res.sendStatus(503);
    });
});

module.exports = router;