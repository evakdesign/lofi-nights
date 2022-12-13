const { Model, DataTypes } = require("sequelize");
const { Episode, Shows } = require(".");

const sequelize = require("../config/connection");

class Track extends model {}

Track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trackID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    songName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    albumName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    labelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeStarted: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeEnded: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "track",
  }
);

// Track.belongsTo(Song);
Track.manyToMany(Shows);

module.exports = Track;
