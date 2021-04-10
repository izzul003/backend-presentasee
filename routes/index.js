var express = require('express');
var router = express.Router();
const userRoutes = require('./users')
const roomRoutes = require('./rooms')

/* GET home page. */
router.use('/users', userRoutes)
router.use('/rooms', roomRoutes)

module.exports = router;
