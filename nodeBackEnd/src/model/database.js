var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;