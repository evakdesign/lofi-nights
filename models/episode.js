// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const Shows = require('./shows');
// const Track = require('./track');



// class Episode extends Model {}
//  Episode.init(
//   { id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//     },
//     trackId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     showId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     underscored: true,
//     modelName: 'episode'
//   }
// );
// Episode.belongsTo(Shows);
// Episode.hasMany(Track);
// module.exports = Episode;