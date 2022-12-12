const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Shows = require('./shows');
const StaffMember = require('./staffMembers');


class StaffMemberWithShows extends Model {}

StaffMemberWithShows.init(
    {
        staffId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            },
        showId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            },  
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'staffMembersWithShows'
      }
);

StaffMemberWithShows.belongsTo(StaffMember);
StaffMemberWithShows.belongsTo(Shows);
module.exports = StaffMemberWithShows;
