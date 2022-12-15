const { Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');


class Shows extends Model {}

Shows.init(
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
    // roleID: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    // episode: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    timeStarted: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    timeEnded: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'shows'
  }
);

module.exports = Shows;
