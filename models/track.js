const { Model, DataTypes } = require("sequelize");
const Shows = require("./shows");

const sequelize = require("../config/connection");

class Track extends Model {}

Track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // trackID: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
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
      allowNull: true,
      defaultValue: Date.now(),
    },
    timeEnded: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: Date.now(),

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
Track.belongsToMany(Shows,{through:"ShowsTrack"});
Shows.belongsToMany(Track,{through:"ShowsTrack"});

module.exports = Track;
