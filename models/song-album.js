const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Album = require("./album");
const Song = require("./Song");

class songAlbum extends model {}

songAlbum.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    songID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "songAlbum",
  }
);

songAlbum.belongsToMany(Song);
songAlbum.hasMany(Album);

module.exports = songAlbum;
