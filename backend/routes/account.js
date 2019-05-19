const express = require('express');
const _ = require('lodash');
const router = express.Router();
const User = require('../db/models/user');
const Account = require('../db/models/account');
const Group = require('../db/models/group');
const LoginToken = require('../db/models/login-token');
const DefaultAccount = require('../resources/default-account.json');
const jwtDecode = require('jwt-decode');

router.get('/', async (req, res) => {
    const jwt = _.get(req, 'cookies.jwt');
    const login_token = jwt && jwtDecode(jwt).login_token;
    if (!login_token) return res.sendStatus(503);

    const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const token = await LoginToken.findOne({ where: { token: login_token, client_ip } });
    if (!token) return res.sendStatus(503);

    const user = await User.findOne({ where: { id: token.user_id } });
    if (!user) return res.sendStatus(503);

    const group = await Group.findOne({ where: { id: user.group_id } });
    if (!group) return res.sendStatus(503);

    let account = await Account.findOne({ where: { user_id: user.id } });
    if (account) {
        account.dataValues.group_name = group.name;
        return res.json({ account });
    }
    else {
        account = DefaultAccount;
        account.group_name = group.name;
        account.new = true;
        account.email = user.email;
        return res.json({ account });
    }
});

router.post('/', async (req, res) => {
    const jwt = _.get(req, 'cookies.jwt');
    const login_token = jwt && jwtDecode(jwt).login_token;
    if (!login_token) return res.sendStatus(503);

    const { account: newAccount } = req.body;
    const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const token = await LoginToken.findOne({ where: { token: login_token, client_ip } });
    if (!token) return res.sendStatus(503);

    const user = await User.findOne({ where: { id: token.user_id } });
    if (!user) return res.sendStatus(503);

    const group = await Group.findOne({ where: { id: user.group_id } });
    if (!group) return res.sendStatus(503);

    const account = await Account.findOne({ where: { user_id: user.id } });
    if (account) {
        return account.update(newAccount).then(updatedAccount => {
            updatedAccount.dataValues.group_name = group.name;
            return res.json({ account: updatedAccount });
        }).catch(err => {
            console.error(err.message);
            return res.sendStatus(503);
        });
    }
    else {
        newAccount.user_id = user.id;
        return Account.create(newAccount).then(updatedAccount => {
            updatedAccount.dataValues.group_name = group.name;
            return res.json({ account: updatedAccount });
        }).catch(err => {
            console.error(err.message);
            return res.sendStatus(503);
        });
    }
});

module.exports = router;