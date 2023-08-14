// host: 'sql6.freemysqlhosting.net',
// user: 'sql6639203',
// password: 'wNKhHKVk8w',
// database: 'sql6639203'

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sql6639203',
    'sql6639203',
    'wNKhHKVk8w',
    {
        dialect: 'mysql',
        host: 'sql6.freemysqlhosting.net',
    }
);

module.exports = sequelize;