const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Station extends Model {}

Station.init(
  { id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rolesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'station'
  }
);

module.exports = Station;

