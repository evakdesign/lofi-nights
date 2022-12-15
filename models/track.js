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
    inQueue: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
      allowNull: true,
    },
    timeEnded: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    trackSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trackImageSrc: {
      type: DataTypes.STRING,
      allowNull: true,
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
// Track.belongsToMany(Shows,{through:"ShowsTrack"});
// Shows.belongsToMany(Track,{through:"ShowsTrack"});

module.exports = Track;
