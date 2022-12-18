const router = require("express").Router();
const sequelize = require('../../config/connection');
//This destructures track and show from models
const { Track, Shows } = require("../../models");
//This destructures handleAuth from middleware
const {handleAuth} = require("../middleware");
//Req = clients sending to server, res = server sending to client.
router.post("/track/new", async (req,res)=>{
    //Body is a catch all for user generated content.This updates the table with the information we pass inside the create function as an argument.(req.body)
    const newTrack = await Track.create(req.body);
    res.json(newTrack);
});
router.put("/track/:trackid", async (req,res) => {
    try {
        const updatedTrack = await Track.update(req.body, {
            where: {
                id: req.params.trackid
            }
        });
        console.log(updatedTrack);
        res.json({success:true});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({success:false});
    }
});
// : this is a query parameter that takes in any variable.
router.post("/:showid/track/new", async (req,res)=>{
    const showId = req.params.showid;
    const newTrack = await Track.create(req.body);
    const foundShow = await Shows.findByPk(showId);
    console.log("Found show: ", foundShow)
    //This appends the new track to the show.
    const appendedTrack = await foundShow.addTrack(newTrack.id);
    res.json(newTrack);
});

router.post("/shows/new", async (req,res)=>{
    //Include is used when you want to show associated data. This gives access to the Track data.
    const newShows = await Shows.create(req.body, {include: {model: Track}});

    res.json(newShows);
});

router.get("/", async (req,res)=>{
    //This is all the shows and the tracks in the database.
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
