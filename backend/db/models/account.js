const sequelize = require('../sequalize');
const Sequelize = require('sequelize');

const account = sequelize.define('account', {
    user_id: {
        type: Sequelize.STRING,
    },
    first_name: {
        type: Sequelize.STRING,
    },
    last_name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    }
}, {
        underscored: true,
        timestamps: true,

        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

module.exports = account;