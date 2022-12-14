const Sequelize = require('sequelize')

require('dotenv').config();
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    process.env.DB_USER,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    }
);

module.exports = sequelize;