const Sequilize = require('sequelize')

require('dotenv').config();
const sequilize = new Sequilize(
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    process.env.DB_USER,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3000
    }
);

module.exports = sequilize;