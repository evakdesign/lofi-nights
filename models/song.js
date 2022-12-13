// const { Model, DataTypes } = require("sequelize");

// const sequelize = require("../config/connection");
// const songAlbum = require("./song-album");
// const songArtist = require("./song-artist");
// const Track = require("./Track");

// class Song extends model {}

// Song.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     songID: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "Song",
//   }
// );

// Song.belongsTo(Track);
// Song.belongsTo(songAlbum);
// Song.belongsTo(songArtist);

// module.exports = Song;
