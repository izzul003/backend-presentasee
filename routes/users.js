var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')

/* GET users listing. */
router.get('/', UserController.read);
router.post('/new', UserController.create);
router.put('/:_id', UserController.update);
router.put('/password/:_id', UserController.updatePassword);
router.delete('/:_id', UserController.delete);

module.exports = router;
