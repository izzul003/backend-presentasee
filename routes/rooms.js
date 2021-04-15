var express = require('express');
var router = express.Router();
const multer = require('multer');
const RoomController = require('../controllers/RoomController')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getDate() + '-' + file.originalname)
  }
})
const upload = multer({ storage });

router.get('/', RoomController.read);
router.post('/new', RoomController.create);
router.put('/upload/:_id',upload.single('file'), RoomController.uploadFile);

module.exports = router;
