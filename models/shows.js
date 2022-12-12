const { Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');
const Episode = require('./episode');
const StaffMemberWithShows = require('./staffMembersWithShows');
const Station = require('./station');


class Shows extends Model {}

Shows.init(
  { showId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    sationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    name: {
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
    timestamps: false,
    underscored: true,
    modelName: 'shows'
  }
);
Shows.hasMany(Episode);
Shows.belongsTo(Station);
Shows.belongsToMany(StaffMemberWithShows);
module.exports = Shows;