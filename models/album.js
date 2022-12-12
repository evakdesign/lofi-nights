const { Model, DataTypes } = require ('sequelize');

const sequelize = require('../config/connection');

class Album extends model {}

Album.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        album_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'album',
    }
);

module.exports = Album;