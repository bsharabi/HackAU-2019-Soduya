const sequelize = require('../sequalize');
const Sequelize = require('sequelize');

const account = sequelize.define('chair', {
    chair_id: {
        type: Sequelize.INTEGER,
    },
    university_name: {
        type: Sequelize.STRING,
    },
    floor: {
        type: Sequelize.STRING,
    },
    desk: {
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