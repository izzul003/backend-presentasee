const db = require('../config')

const RoomSchema = new db.Schema({
  title: {type: String, required: true},
  fileUrl: {type: String},
  joinned: {type: Number, default: 0}, 
  date: {type: Number, default: Date.now()},
})

const model = db.model('RoomModel', RoomSchema)

module.exports = model