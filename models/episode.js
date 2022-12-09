const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Episode extends Model {}
 Episode.init(
  { id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    playlist: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'episode'
  }
);

module.exports = Episode;