const db = require('../config')

const SlideSchema = new db.Schema({
  RoomId: {type: db.Types.ObjectId, required: true},
  fileUrl: {type: String},
  date: {type: Number, default: Date.now()},
})

const model = db.model('SlideModel', SlideSchema)

module.exports = model