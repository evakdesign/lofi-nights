const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const songAlbum = require("./song-album");
const songArtist = require("./song-artist");
const Track = require("./Track");

class Artist extends model {}

Artist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "artist",
  }
);


Artist.belongsToMany(songArtist);

module.exports = Artist;
