const { Model } = require('sequelize');
const sequelize =require('../../config/connection');
const router = require('express').Router();
const Track = require('../../models/track');


router.get('/', (req, res) => {
    Track.findAll({
        attributes:[
            'id',
            'songName',
            'artistName',
            'albumName',
            'labelName',
            'startTime',
            'endTime'
        ],
    }).then(trackData => {
        console.log(trackData);
        const tracks = trackData.map(track => track.get({plain:true}));
        res.render('main',{trackData})
    })
    
})

router.post('/', (req, res) => {
    Track.create({
       name: req.body.name,
       
    }).then(trackData => {
       res.json(trackdata)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
})
