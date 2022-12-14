const Sequilize = require('sequelize')

require('dotenv').config();
const sequilize = new Sequilize(
    {
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD,
        username:process.env.DB_USER,
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,

    }
);

module.exports = sequilize;