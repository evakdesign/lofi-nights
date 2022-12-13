// const { Model, DataTypes } = require("sequelize");
// const { Song } = require(".");

// const sequelize = require("../config/connection");
// const Artist = require("./artist");
// const Song = require("./Song");

// class songArtist extends model {}

// songArtist.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     songArtist_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "songArtist",
//   }
// );

// songArtist.hasMany(Artist);
// songArtist.hasMany(Song);

// module.exports = songArtist;