const sequelize = require('../sequalize');
const Sequelize = require('sequelize');

const group = sequelize.define('group', {
    name: {
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

module.exports = group;