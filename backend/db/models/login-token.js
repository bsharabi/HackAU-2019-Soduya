const sequelize = require('../sequalize');
const Sequelize = require('sequelize');

const user = sequelize.define('login_token', {
    user_id: {
        type: Sequelize.INTEGER,
    },
    token: {
        type: Sequelize.STRING,
    },
    client_ip: {
        type: Sequelize.STRING,
    }
}, {
        underscored: true,
        timestamps: true,

        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

module.exports = user;