const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Station = require('./station');
const StaffMember = require('./staffMembers');


class Role extends Model {}

Role.init(
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
    stationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'role'
  }
);
Role.belongsTo(Station);
Role.hasMany(StaffMember);
module.exports = Role;