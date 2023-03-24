const Sequelize = require('sequelize')

require('dotenv').config();
const sequelize = new Sequelize( 
    process.env.DB_STRING,
    {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
            ssl:{
                require:"true"
            }
        }
    }
);

module.exports = sequelize;