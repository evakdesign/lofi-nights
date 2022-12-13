const router = require('express').Router();
const homeRoutes = require('./homeroutes')

router.use('/api', homeRoutes)

module.exports = router;