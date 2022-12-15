const router = require("express").Router();
const sequelize = require('../../config/connection');
const { Track, Shows } = require("../../models");
const {handleAuth} = require("../middleware");
router.post("/track/new", async (req,res)=>{
    const newTrack = await Track.create(req.body);
    res.json(newTrack);
});
router.post("/:showid/track/new", async (req,res)=>{
    const showId = req.params.showid;
    const newTrack = await Track.create(req.body);
    const foundShow = await Shows.findByPk(showId);
    console.log("Found show: ", foundShow)
    const appendedTrack = await foundShow.addTrack(newTrack.id);
    res.json(newTrack);
});

router.post("/shows/new", async (req,res)=>{
    const newShows = await Shows.create(req.body, {include: {model: Track}});

    res.json(newShows);
});

router.get("/", async (req,res)=>{
    const newShows = await Shows.findAll({include: {model: Track}});

    res.json(newShows);
});
module.exports = router;

// const { Model } = require('sequelize');
// const Track = require('../../models/track');


// router.get('/', (req, res) => {
//     Track.findAll({
//         attributes:[
//             'id',
//             'songName',
//             'artistName',
//             'albumName',
//             'labelName',
//             'startTime',
//             'endTime'
//         ],
//     }).then(trackData => {
//         console.log(trackData);
//         const tracks = trackData.map(track => track.get({plain:true}));
//         res.render('main',{trackData})
//     });
    
// })

// router.post('/', (req, res) => {
//     Track.create({
//        name: req.body.name,
       
//     }).then(trackData => {
//        res.json(trackdata)
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
    
// })
