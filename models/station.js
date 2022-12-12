const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./role');
const Shows = require('./shows');

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
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'station'
  }
);
Station.hasMany(Shows);
Station.hasMany(Role);
module.exports = Station;

