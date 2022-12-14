const router = require("express").Router();
const { Track, Shows } = require("../../models");

const {handleAuth} = require("../middleware");

router.post("/track/new", async (req,res)=>{
    const newTrack = await Track.create(req.body);
    res.json(newTrack);
});
module.exports = router;