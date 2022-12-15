const Sequelize = require('sequelize')

require('dotenv').config();
const sequelize = new Sequelize( 
    {
        database: process.env.database,
        password:process.env.password,
        username:'root',
        host: process.env.host,
        dialect: 'mysql',
        port: process.env.port,

    }
);

module.exports = sequelize;