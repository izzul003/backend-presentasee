var express = require('express');
var router = express.Router();
const SlideController = require('../controllers/SlideController')

router.get('/:RoomId', SlideController.read);
router.put('/like/:_id', SlideController.addLike);
router.put('/questions/:_id', SlideController.addQuestions);

module.exports = router;
