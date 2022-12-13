const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Shows = require("./shows");

class Track extends Model {}

Track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    label_name: {
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
Track.hasMany(Shows);
module.exports = Track;
