var express = require('express');
var router = express.Router();
const userRoutes = require('./users')
const roomRoutes = require('./rooms')
const slideRoutes = require('./slides')

/* GET home page. */
router.use('/users', userRoutes)
router.use('/rooms', roomRoutes)
router.use('/slides', slideRoutes)

module.exports = router;
