const { Model, DataTypes } = require ('sequelize');

const sequelize = require('../config/connection');
const Label = require('./label');
const songAlbum = require('./song-album');

class Album extends model {}

Album.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        albumID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        labelID: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'album',
    }
);

Album.belongsto(Label);
Album.hasMany(songAlbum);

module.exports = Album;