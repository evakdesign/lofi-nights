const { Model, DataTypes } = require("sequelize");
const { Song, Episode } = require(".");

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
    songID: {
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

Track.belongsTo(Song);
Track.belongsToMany(Episode);

module.exports = Track;
