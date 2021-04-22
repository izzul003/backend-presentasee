const db = require('../config')

const SlideSchema = new db.Schema({
  RoomId: {type: db.Types.ObjectId, required: true},
  fileUrl: {type: String},
  likes: {type: Number, default: 0},
  questions: {type: Number, default: 0},
  people: {type: Number, default: 0},
  date: {type: Number, default: Date.now()},
})

const model = db.model('SlideModel', SlideSchema)

module.exports = model