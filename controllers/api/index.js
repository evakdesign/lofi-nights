const sequelize =require('../../config/connection');
const router = require('express').Router();
const trackRouter = require('./trackroutes.js');


//using router to estiblish '/api' > '/notes' > notes.js
router.use('/track', trackRouter);

module.exports = router;
